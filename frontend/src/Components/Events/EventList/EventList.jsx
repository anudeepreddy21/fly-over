import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import events from "../../../assets/eventsData/EventDetails.json";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function EventList() {
  console.log(events);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Events
            </Typography>
            <Typography
              variant="h9"
              align="center"
              color="text.secondary"
              paragraph
            >
              Find your network with events you would like to attend. Search for
              Related Sponsors, Industries, Academic departments and colleges
              with fairs to serve our students for Career and Professional
              Development.
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">View All </Button>
              <Button variant="outlined">Attend All</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: "/eventDetails",
              // state:{
              //   events
              // }
            }}
          >
            {/* End hero unit */}
            <Grid container spacing={2}>
              {events.map((event, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "10.25%",
                      }}
                      image="https://source.unsplash.com/random"
                      //image={require("../../../assets/company.jpeg")}
                      // image={event.image}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {event.eventName}
                      </Typography>
                      <Typography variant="subtitle1">
                        {" "}
                        -&nbsp;{event.organization}
                      </Typography>
                      <Typography>{event.date}</Typography>
                      <Typography>
                        {event.time} <br />
                        {event.mode}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Register</Button>
                      <Button size="small">Save</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Link>
        </Container>
      </main>
    </ThemeProvider>
  );
}

