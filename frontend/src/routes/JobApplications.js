import { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Navigator from "../Components/Navigator";
import Header from "../Components/Header";
import JobApplication from "../Components/ApplyJobs/JobApplication";
import { useParams } from "react-router-dom";
const drawerWidth = 240;

class JobApplications extends Component {
  state = {
    card: {
      company: "JPMorgan Chase & Co.",
      eventtName:
        "JPMorgan Chase & Co. 2023 Proud to Be in Analytics - Diversity Summit",
      date: "Thu November 17, 2022",
      time: "17: 00 - 18: 00 EST",
      mode: "In person",
      img: "",
    },
  };
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
          <JobApplication></JobApplication>
        </Box>
      </Box>
    );
  }
}

export default JobApplications;
