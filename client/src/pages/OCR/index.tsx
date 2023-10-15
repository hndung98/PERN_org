import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Layout from "../../common/layouts/Layout";

function OCRPage() {
  const [text1, setText1] = useState('default text 1');
  const [text2, setText2] = useState('default text 2');
  const [result, setResult] = useState('');
  
  const onCompareClick = () => {
    console.log('onCompareClick');
    setResult(text1 + text2);
  }
  return (
    <Layout>
    <TextField
      id="id-text-1"
      label="Text 1"
      multiline
      rows={4}
      defaultValue={text1}
      onChange={(event: any) => {
        setText1(event.target.value);
      }}
    />
    <TextField
      id="id-text-2"
      label="Text 2"
      multiline
      rows={4}
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
      multiline
      rows={4}
      value={result}
    />
    </Layout>
  );
}

export default OCRPage;
