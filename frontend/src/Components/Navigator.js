import * as React from "react";
import { Component } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Drawer,
} from "@mui/material";


import {
  Person as PersonIcon,
  // Extension as ExtensionIcon,
  Logout as LogoutIcon,
  Dashboard as DashboardIcon,
  Work as WorkIcon,
  BarChart as BarChartIcon,
  // Details as LoupeIcon, 
  Chat as ChatIcon,
  ContactEmergency as ContactEmergencyIcon,
  Recommend as RecommendIcon,
  School as SchoolIcon

} from "@mui/icons-material";
import { Link } from "react-router-dom";

class Navigator extends Component {
  mainCategories = [
    {
      name: "Projects",
      icon: <WorkIcon />,
      route: "/dashboard",
      admin: true,
    },
  ];
  generalCategories = [
    {
      name: "Career Events",
      icon: <DashboardIcon />,
      route: "/eventLists",
      admin: true,
    },
    // {
    //   name: "My Event Details",
    //   icon: <LoupeIcon />,
    //   route: "/eventDetails",
    //   admin: true,
    // },
    // {
    //   name: "Apply Jobs",
    //   icon: <ExtensionIcon />,
    //   route: "/jobApplications",
    //   admin: true,
    // },
    {
      name: "Recruiter Reports",
      icon: <BarChartIcon />,
      route: "/recruiterReportContents",
      admin: true,
    },
    {
      name: "Faculty Reports",
      icon: <SchoolIcon />,
      route: "/facultyReportContents",
      admin: true,
    },
    {
      name: "My Applications",
      icon: <ContactEmergencyIcon />,
      route: "/myApplications",
      admin: true,
    },
    {
      name: "Messaging",
      icon: <ChatIcon />,
      route: "/chat",
      admin: true,
    },
    {
      name: "Recommendations",
      icon: <RecommendIcon />,
      route: "/recommendations",
      admin: true,
    },
    {
      name: "Profile",
      icon: <PersonIcon />,
      route: "/profile",
      admin: true,
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      route: "/logout",
      admin: true,
    },
  ];
  state = {};

  render() {
    // const { classes } = this.props;

    return (
      <div>
        <Drawer variant="permanent" >
        {/* </div>open={open}> */}
          <Toolbar />
          <Divider />
          <List>
            {this.mainCategories.map((category, index) => (
              <Link style={{ textDecoration: "none" }} to={category.route}>
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{category.icon}</ListItemIcon>
                    <ListItemText primary={category.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {this.generalCategories.map((category, index) => (
              <Link style={{ textDecoration: "none" }} to={category.route}>
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{category.icon}</ListItemIcon>
                    <ListItemText primary={category.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Navigator;
