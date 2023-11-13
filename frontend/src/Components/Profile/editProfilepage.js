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
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

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
  instagram: "https:///intagram.com",
  twitter: "https://twitter.com",
  other: "https://googlescholar.com",
};

let additionalDetails =
  "A Second Year Masters Student Interested in full-time roles as SWE.";

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

let nextId = 5;

export default function EditProfilePage() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const [name, setName] = React.useState("");
  const [artists, setArtists] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Demo sx={{ p: 2 }}>
            <Typography>Personal Details</Typography>
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Full Name"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              value={currentUser["Name"]}
              disabled
            />
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Degree"
              variant="standard"
              value={currentUser["Degree"]}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Expected Graduation"
              variant="standard"
              value={currentUser["Graduation"]}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Email"
              variant="standard"
              value={currentUser["Email"]}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Phone"
              variant="standard"
              value={currentUser["Phone"]}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Current Location"
              variant="standard"
              value={currentUser["Location"]}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
          </Demo>
        </Grid>
        <Grid item xs={4}>
          <Demo sx={{ p: 2 }}>
            <Typography>Socials</Typography>
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="LinkedIn"
              variant="standard"
              value={socials["linkedin"]}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedInIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Github"
              value={socials["github"]}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GitHubIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Twitter"
              value={socials["twitter"]}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TwitterIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              style={{ width: "300px", marginTop: "20px" }}
              type="text"
              label="Other"
              value={socials["other"]}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LanguageIcon />
                  </InputAdornment>
                ),
              }}
            />

            <br />
          </Demo>
        </Grid>
        <Grid item xs={4}>
          <Demo sx={{ p: 2 }}>
            <Typography>Skills</Typography>
            <TextField
              style={{
                width: "300px",
                marginTop: "20px",
                marginBottom: "10pt",
              }}
              type="text"
              label="Add Skill"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="start"
                    onClick={() => {
                      setName("");
                      chipData.push({
                        key: nextId++,
                        label: name,
                      });
                    }}
                  >
                    <AddBoxIcon />
                  </InputAdornment>
                ),
              }}
            />

            {chipData.map((data) => {
              return (
                // <ListItem key={data.key}>
                <Chip
                  sx={{ m: 0.5 }}
                  color="primary"
                  label={data.label}
                  onDelete={handleDelete(data)}
                />
                // </ListItem>
              );
            })}

            <br />
          </Demo>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        sx={{ mt: 1 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3} alignItems="center" justifyContent="center">
          <Button
            variant="contained"
            href="/Profile"
            color="primary"
            sx={{ minWidth: 200 }}
          >
            update profile
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
// }

// export default EditProfilePage;
