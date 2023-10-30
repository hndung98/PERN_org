import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Layout from "../../common/layouts/Layout";
// import { read, writeFileXLSX } from "xlsx";
import * as XLSX from "xlsx-js-style";
const Diff = require("diff");

export default function DrawerAppBar() {
  const handleExportClick = () => {
    readExcel();
    // var oldtext = "OLD";
    // var newtext = "NEW";
    // /* read the file */
    // var workbook = XLSX.readFile("./Temp.xlsx"); // parse the file
    // var sheet = workbook.Sheets[workbook.SheetNames[0]]; // get the first worksheet

    // /* loop through every cell manually */
    // var range = XLSX.utils.decode_range(sheet["!ref"]??""); // get the range
    // for (var R = range.s.r; R <= range.e.r; ++R) {
    //   for (var C = range.s.c; C <= range.e.c; ++C) {
    //     /* find the cell object */
    //     var cellref = XLSX.utils.encode_cell({ c: C, r: R }); // construct A1 reference for cell
    //     if (!sheet[cellref]) continue; // if cell doesn't exist, move on
    //     var cell = sheet[cellref];

    //     /* if the cell is a text cell with the old string, change it */
    //     if (!(cell.t == "s" || cell.t == "str")) continue; // skip if cell is not text
    //     if (cell.v === oldtext) cell.v = newtext; // change the cell value
    //   }
    // }
    // XLSX.writeFile(workbook, "newfile.xlsx");
  };

  const readExcel = async () => {
    const response = await fetch("excel/Temp.xlsx");
    const dt = await response.arrayBuffer();
    const workbook = XLSX.read(dt, { type: "buffer", cellStyles: true });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // get the first worksheet
    const mydata = XLSX.utils.sheet_to_json(worksheet); // generate objects
    worksheet["A1"].s = {
      // set the style for target cell
      font: {
        sz: 24,
        bold: true,
        color: { rgb: "FFFFAA00" },
      },
    };
    console.log("data", mydata);
    XLSX.utils.sheet_add_aoa(worksheet, [["NEW VALUE from xsls style"]], {
      origin: "D1",
    });

    let row = [
      { v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
      {
        v: "bold & color",
        t: "s",
        s: { font: { bold: true, color: { rgb: "FF0000" } } },
      },
      { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
      { v: "line\nbreak", t: "s", s: { alignment: { wrapText: true } } },
    ];
    // STEP 3: Create worksheet with rows; Add worksheet to workbook
    const ws = XLSX.utils.aoa_to_sheet([row]);
    XLSX.utils.book_append_sheet(workbook, ws, "readme demo");
    let container = document.getElementById("display");
    if (container) container.innerHTML = XLSX.utils.sheet_to_html(worksheet);

    XLSX.writeFile(workbook, "test.xlsx", { cellStyles: true });

    // const wb = XLSX.read(f); // parse the array buffer
    // const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    // const data = XLSX.utils.sheet_to_json(ws); // generate objects
  };

  React.useEffect(() => {}, []);

  return (
    <Layout>
      <p>___</p>
      <div id="display"></div>
      <p>___</p>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae.
      </Typography>
      <Button variant="outlined" color="error" onClick={handleExportClick}>
        Export
      </Button>
    </Layout>
  );
}
