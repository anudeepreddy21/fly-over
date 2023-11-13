import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import recommendedCourses from "./data.json";
import "./Recommendations.css";
import {
  Autocomplete,
  TextField,
  createFilterOptions,
  capitalize,
} from "@mui/material";

const filterOptions = createFilterOptions({
  matchFrom: "any",
  stringify: (option) => option.title + option.subheader,
});

class Recommendations extends Component {
  state = {
    courseList: JSON.parse(JSON.stringify(recommendedCourses)),
  };
  onCourseSelect = (_, value) => {
    console.log(value);
    var { courseList } = this.state;
    courseList = recommendedCourses.filter(
      (v) => JSON.stringify(v) === JSON.stringify(value)
    );
    if (!courseList.length) {
      courseList = JSON.parse(JSON.stringify(recommendedCourses));
    }
    this.setState({
      courseList,
    });
  };
  render() {
    var { courseList } = this.state;

    return (
      <div>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Recommendations
            </Typography>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Top Course Recommendations
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Certifications
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Resume Review
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Career Coaching
              </Link>
            </nav>
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Chat Now
            </Button>
          </Toolbar>
        </AppBar>
        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 4, pb: 4 }}
        >
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Recommendations
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Unlimited Access - Expert Instructors - On your schedule
          </Typography>
          <Typography
            variant="h9"
            align="center"
            color="text.secondary"
            component="p"
          >
            View Top Courses Recommended Exclusively for you, Book a 30-minute
            1:1 with industry experts for Resume Review and Career Coaching
            across a variety of specializations to level up your career with
            FlyOver.
          </Typography>
        </Container>

        {/* End hero unit */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: 1,
            justifyContent: "flex-start",
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
            groupBy={(option) => option.subheader}
            id="project-autocomplete"
            options={courseList}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            onChange={this.onCourseSelect}
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
                label="Search Courses"
              />
            )}
          />
        </Box>
        <br></br>

        <Container component="main">
          <Grid container spacing={3} alignItems="flex-end">
            {courseList.map((recommendedCourse) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={recommendedCourse.title}
                xs={12}
                sm={recommendedCourse.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={recommendedCourse.title}
                    subheader={recommendedCourse.subheader}
                    titleTypographyProps={{ align: "center" }}
                    action={
                      recommendedCourse.title === "Kubernates" ? (
                        <StarIcon />
                      ) : null
                    }
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                      >
                        ${recommendedCourse.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {Object.keys(recommendedCourse.description).map(
                        (line, index) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="left"
                            key={index}
                          >
                            <div className="subHeading">
                              - {capitalize(line.toString())}
                            </div>
                            <div className="value">
                              {recommendedCourse.description[line]
                                ? recommendedCourse.description[line]
                                : "N/A"}
                            </div>
                          </Typography>
                        )
                      )}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      href={
                        recommendedCourse.price !== "0"
                          ? "/paymentGateway"
                          : recommendedCourse.link
                      }
                      variant={recommendedCourse.buttonVariant}
                    >
                      {recommendedCourse.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Recommendations;
