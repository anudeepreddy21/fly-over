import { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Navigator from "../Components/Navigator";
import Header from "../Components/Header";
import RecruiterReportContent from "../Components/RecruiterReports/RecruiterReports";

const drawerWidth = 240;

class recruiterReportContents extends Component {
  state = {};
  render() {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header handleDrawerToggle={this.handleDrawerToggle}></Header>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <Navigator></Navigator>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          style={{ backgroundColor: "rgb(233, 237, 243)" }}
        >
          <Toolbar />
          <RecruiterReportContent></RecruiterReportContent>
        </Box>
      </Box>
    );
  }
}

export default recruiterReportContents;
