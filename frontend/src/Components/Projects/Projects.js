import React, { Component } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectList from "../../assets/data.json";
import {
  Autocomplete,
  createFilterOptions,
  Grid,
  TextField,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ProjectCarouselCard from "./ProjectCarouselCard/ProjectCarouselCard";
import SearchIcon from "@mui/icons-material/Search";

import "./Projects.css";
import { Box } from "@mui/system";
import axios from "axios";
import { baseURL } from "../../config";

const filterOptions = createFilterOptions({
  matchFrom: "any",
  stringify: (option) => option.projectName + option.company,
});

class Projects extends Component {
  state = {
    projects: JSON.parse(JSON.stringify(projectList)),
  };

  componentDidMount() {
    axios
      .get(baseURL + "/project")
      .then((res) => {
        if (res && res.data) {
          this.setState({
            projects: res.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onProjectSelect = (_, value) => {
    var { projects } = this.state;
    projects = projectList.filter(
      (v) => JSON.stringify(v) === JSON.stringify(value)
    );
    if (!projects.length) {
      projects = JSON.parse(JSON.stringify(projectList));
    }
    this.setState({
      projects,
    });
  };

  render() {
    var { projects } = this.state;
    return (
      <React.Fragment>
        <Carousel navButtonsAlwaysVisible>
          {projects.map((project, index) => {
            return (
              <ProjectCarouselCard
                key={index}
                project={project}
              ></ProjectCarouselCard>
            );
          })}
        </Carousel>
        <br></br>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: 1,
          }}
        >
          <SearchIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          ></SearchIcon>
          <Autocomplete
            freeSolo
            groupBy={(option) => option.company}
            id="project-autocomplete"
            options={projects}
            getOptionLabel={(option) => option.projectName}
            filterOptions={filterOptions}
            onChange={this.onProjectSelect}
            renderGroup={(params, idx) => (
              <li key={idx}>
                <div className="groupHeader">{params.group}</div>
                <div className="groupItems">{params.children}</div>
              </li>
            )}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                label="Search Projects"
              />
            )}
          />
        </Box>
        <Grid container gap={2.5}>
          {projects.map((project, index) => (
            <Grid item>
              <ProjectCard key={index} project={project}></ProjectCard>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Projects;
