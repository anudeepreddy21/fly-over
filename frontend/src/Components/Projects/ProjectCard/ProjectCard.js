import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { Component } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Bookmark as BookMarkIcon,
  Event as EventIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from "@mui/icons-material";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

class ProjectCard extends Component {
  state = {
    saved: false,
  };
  onSave = () => {
    var { saved } = this.state;
    saved = !saved;
    this.setState({
      saved,
    });
  };
  render() {
    const project = this.props.project;
    return (
      <Container sx={{ py: 8 }} maxWidth="md">
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/projectDetails",
            state: {
              project,
            },
          }}
        >
          <Card sx={{ width: 300 }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    width: 45,
                    height: 45,
                    fontSize: 25,
                    bgcolor: blue[800],
                  }}
                >
                  {project.company.slice(0, 1)}
                </Avatar>
              }
              action={
                <Tooltip title="Save!">
                  <IconButton aria-label="save" onClick={this.onSave}>
                    {this.state.saved ? (
                      <BookMarkIcon></BookMarkIcon>
                    ) : (
                      <BookmarkBorderIcon></BookmarkBorderIcon>
                    )}
                  </IconButton>
                </Tooltip>
              }
              title={
                <Typography variant="h6" fontFamily="inherit">
                  {project.company}
                </Typography>
              }
            />
            <CardContent style={{ marginTop: -10 }}>
              <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
                - {project.projectName}
              </Typography>
              <Typography variant="body2" color="grey">
                {project.description}
              </Typography>
              <Divider style={{ marginTop: 15, marginBottom: 15 }}></Divider>
              {/* Icons */}
              <Grid container gap={1}>
                <Grid item>
                  <AccessTimeIcon
                    color="disabled"
                    style={{ marginTop: 1.5 }}
                  ></AccessTimeIcon>
                </Grid>
                <Grid item alignSelf="center" color="GrayText">
                  <Typography variant="body2">
                    Duration: {project.duration} mos
                  </Typography>
                </Grid>
              </Grid>
              <Grid container gap={1}>
                <Grid item>
                  <EventIcon
                    color="disabled"
                    style={{ marginTop: 1.5 }}
                  ></EventIcon>
                </Grid>
                <Grid item alignSelf="center" color="GrayText">
                  <Typography variant="body2">
                    Posted on: {new Date().toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Link>
      </Container>
    );
  }
}

export default ProjectCard;
