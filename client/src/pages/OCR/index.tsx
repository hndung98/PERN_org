import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Layout from "../../common/layouts/Layout";
const Diff = require("diff");

function OCRPage() {
  const [text1, setText1] = useState("default text 1");
  const [text2, setText2] = useState("default text 2");
  const [result, setResult] = useState("");

  const onCompareClick = () => {
    console.log("onCompareClick");
    let span = null;
    const diff = Diff.diffChars(text1, text2),
      display = document.getElementById("display"),
      fragment = document.createDocumentFragment();
    console.log("diff", diff);
    diff.forEach((part: any) => {
      // green for additions, red for deletions
      // grey for common parts
      const color = part.added ? "blue" : part.removed ? "red" : "grey";
      const bgcolor = part.added ? "#ffff30" : part.removed ? "#ffff30" : "white";
      span = document.createElement("span");
      span.style.color = color;
      span.style.backgroundColor = bgcolor;
      span.appendChild(document.createTextNode(part.value));
      fragment.appendChild(span);
    });
    display?.appendChild(fragment);
    let br = document.createElement("br");
    fragment.appendChild(br);
    display?.appendChild(fragment);
    console.log('innerText=', display?.innerText);

    setResult(text1 + text2);
  };
  return (
    <Layout>
      <TextField
        id="id-text-1"
        label="Text 1"
        defaultValue={text1}
        onChange={(event: any) => {
          setText1(event.target.value);
        }}
      />
      <TextField
        id="id-text-2"
        label="Text 2"
        defaultValue={text2}
        onChange={(event: any) => {
          setText2(event.target.value);
        }}
      />

      <Button variant="contained" color="success" onClick={onCompareClick}>
        Compare
      </Button>

      <TextField
        id="id-text-result"
        label="Result"
        value={result}
      />
      <p>___</p>
      <div id="display"></div>
      <p>___</p>
    </Layout>
  );
}

export default OCRPage;
