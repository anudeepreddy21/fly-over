import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Applicants from "./RecentApplications";

const theme = createTheme();

function SubmittedAppications() {
  return (
    <ThemeProvider theme={theme}>
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
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Application Tracker
          </Typography>
          <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Submitted
          </Button>
          <Button active href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Draft
          </Button>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Inactive
          </Button>
        </Toolbar>
      </AppBar>

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
          Submitted | 5 jobs
        </Typography>
        <Typography
          variant="h9"
          align="center"
          color="text.secondary"
          component="p"
        >
          You've successfully applied for the positions shown below and these
          are in review. We'll contact you if your qualifications match the job.
        </Typography>
      </Container>

      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Applicants />
        </Paper>
      </Grid>

      {/* End hero unit */}
    </ThemeProvider>
  );
}

export default function Pricing() {
  return <SubmittedAppications />;
}
