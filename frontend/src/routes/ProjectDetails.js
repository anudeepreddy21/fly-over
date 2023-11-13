import { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Navigator from "../Components/Navigator";
import Header from "../Components/Header";
import ProjectDetail from "../Components/Projects/ProjectDetails/ProjectDetail";

const drawerWidth = 240;

class ProjectDetails extends Component {
  state = {
    project: {
      company: "Google",
      projectName: "Let's make everything",
      description:
        "This is a demo project from Google which is specially designed for students.",
      duration: 15,
      date: "",
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
          <ProjectDetail project={this.state.project} />;
        </Box>
      </Box>
    );
  }
}

export default ProjectDetails;
