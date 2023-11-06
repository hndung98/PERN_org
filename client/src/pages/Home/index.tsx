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
const Diff = require("diff");

export default function DrawerAppBar() {
  const handleExportClick = () => {
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
