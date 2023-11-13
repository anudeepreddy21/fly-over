import { Button, Card, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./ProjectCarouselCard.css";
import { Event as EventIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

class ProjectCarouselCard extends Component {
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
      <Card>
        <Grid container style={{ height: 300 }}>
          {/* Logo */}
          <Grid
            item
            className="gridItem"
            sm={3}
            align="center"
            justifyItems="center"
          >
            <div
              style={{
                height: 200,
                width: 200,
                borderRadius: "50%",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%" }}
                alt="logoaldfml"
                src={
                  require(`../../../assets/logos/${project.company
                    .toString()
                    .toLowerCase()}-logo.png`).default
                }
              ></img>
            </div>
          </Grid>
          {/* Details */}
          <Grid item sm={6} style={{ padding: 20 }}>
            <Grid container alignItems="center" style={{ height: "100%" }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
                  <strong>
                    <span style={{ fontSize: 25 }}>{project.company}</span>
                    <br />- {project.projectName}
                  </strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="grey">
                  {project.description}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container item gap={1}>
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
                <Grid container item gap={1}>
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
              </Grid>
            </Grid>
          </Grid>
          {/* Finish */}
          <Grid item sm={3}>
            <Grid container style={{ height: "100%" }} alignContent="center">
              <Grid item xs={12}>
                <Link to="/jobApplications" style={{ textDecoration: "none" }}>
                  <Button variant="contained">{"Apply now "}</Button>
                </Link>{" "}
              </Grid>
              <Grid item xs={12}>
                <Button>Save for later!</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  }
}
export default ProjectCarouselCard;
