import React, { Component } from "react";
import { Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import { green, lightBlue } from "@mui/material/colors";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

let currentUser = {
  Name: "Modi G",
  Email: "mod12@vt.edu",
  Phone: "(540) 900 9000",
  Location: "Blacksburg, VA",
  Degree: "MEng Computer Science",
  Graduation: "Fall 2022",
};

let socials = {
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  // instagram: "https:///intagram.com",
  twitter: "https://twitter.com",
  other: "https://googlescholar.com",
};

let socialIconList = [
  <LinkedInIcon />,
  <GitHubIcon />,
  <TwitterIcon />,
  <LanguageIcon />,
];

let additionalDetails =
  "A Second Year Masters Student Interested in full-time roles as SWE.";

let iconList = [
  <PersonIcon />,
  <EmailIcon />,
  <PhoneIcon />,
  <HomeIcon />,
  <SchoolIcon />,
  <DateRangeIcon />,
];

const skills = ["Angular", "jQuery", "React", "Vue.js"];

const projects = [
  {
    title: "Flyover",
    type: "Course Project",
    application: "Web-App",
    description: "Project for Capstone",
  },
  {
    title: "Covid Tracker",
    type: "Software Engineering",
    application: "Mobile App",
    description: "Covid tracking application for general pupose use",
  },
  {
    title: "Kubernates",
    type: "Course Project",
    application: "Machine Learning",
    description: "Used Kubernetes to understand ML use-cases",
  },
];

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

class ProfilePage extends Component {
  state = {};
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 545 }}>
            <CardMedia
              component="img"
              object-fit="scale-down"
              image={require("./../../assets/test.jpeg").default}
              alt="User Profile Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {currentUser["Name"]}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {currentUser["Degree"]}
              </Typography>
              <Typography variant="body2">{additionalDetails}</Typography>
            </CardContent>
            <CardActions>
              <Button color="primary" href="/myApplications">
                View Applications
              </Button>
              <Button color="primary" href="/editProfile">
                Edit Profile
              </Button>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
            </CardActions>
          </Card>
          <Demo sx={{ mt: 2 }}>
            <List>
              {Object.keys(socials).map((key, value) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: lightBlue[800] }}>
                      {socialIconList[value]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    // primary={key}
                    secondary={key}
                    //   secondary="Secondary text"
                  />

                  <ListItemText>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={socials[key]}
                    >
                      {socials[key]}
                    </a>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>

        <Grid item xs={8}>
          {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography> */}
          <Demo>
            <List>
              {Object.keys(currentUser).map((key, value) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: lightBlue[800] }}>
                      {iconList[value]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={key}
                    //   secondary={{ currentUser }}
                    //   secondary="Secondary text"
                  />

                  <ListItemText>{currentUser[key]}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Demo>
          <Paper
            sx={{
              display: "flex",
              //   justifyContent: "center",
              flexWrap: "wrap",
              p: 1.5,
              mt: 2,
            }}
            component="ul"
          >
            <Typography variant="h6" sx={{ m: 0.2, marginRight: 1 }}>
              Skills:
            </Typography>
            <Stack direction="row" spacing={1}>
              {skills.map(function (data) {
                let icon;

                return (
                  // <ListItem key={data.key}>
                  <Chip icon={icon} label={data} color="primary" />
                  // </ListItem>
                );
              })}
            </Stack>
          </Paper>
          <Paper
            sx={
              {
                //   display: "flex",
                //   justifyContent: "center",
                //   flexWrap: "wrap",
                // p: 1.5,
                // m: 0,
              }
            }
            component="ul"
          >
            <Typography variant="h5" sx={{ pt: 1, ml: -3.5 }}>
              Project Highlights
            </Typography>
            <Grid
              container
              sx={{ pb: 1 }}
              alignItems="center"
              justifyContent="center"
            >
              {projects.map((currentProject) => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={currentProject.title} padding={1} xs={4}>
                  <Card
                    sx={{
                      bgcolor: lightBlue[800],
                      maxWidth: 220,
                      minHeight: 220,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 11, textDecoration: "underline" }}
                        color="#e6e1e1"
                        variant="overline"
                        gutterBottom
                      >
                        {currentProject.type}
                      </Typography>
                      <Typography variant="h5" component="div" color="white">
                        {currentProject.title}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="#ffdc">
                        {currentProject.application}
                      </Typography>
                      <Typography variant="body2" color="white">
                        Description: {currentProject.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    );
  }
}

export default ProfilePage;
