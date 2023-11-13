import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicInfoForm from "./BasicInfoForm";
import ResumeUploadForm from "./ResumeUpload";
import JobSpecificQuestionForm from "./JobSpecificQuestionForm";
import Review from "./Review";
import axios from "axios";
import { baseURL } from "../../config";

const steps = [
  "Upload Resume",
  "Contact Information",
  "Job Specific Questions",
  "Review and Submit",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ResumeUploadForm />;
    case 1:
      return <BasicInfoForm />;
    case 2:
      return <JobSpecificQuestionForm />;
    case 3:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log("applied");
      axios
        .post(baseURL + "/project/proj2/apply?userId=sanghaviparth99@vt.edu")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="relative"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Amazon: Software Engineer
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Application Summary
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h3" gutterBottom>
                Thank You
              </Typography>
              <Typography variant="h5" gutterBottom>
                Application Submitted
              </Typography>
              <Typography variant="subtitle1">
                Thank you for submitting your application! <br />
                You will receive an email confirmation of your application and
                next steps to expect. Once your application is reviewed, a
                member of Talent Acquisition will contact you directly.
                <br />
                We encourage you to view the sponsorship openings available on
                our Career site and to review your profile to ensure your
                information is accurate and up-to-date.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1
                    ? "Submit Application"
                    : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
