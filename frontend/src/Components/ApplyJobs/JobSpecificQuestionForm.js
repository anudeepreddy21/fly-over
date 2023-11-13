import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function JobSpecificQuestionForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Job Specific Questions
      </Typography>
      <Typography variant="h8" gutterBottom>
        Please complete the questions on this page, to the best of your ability.<br/><br/>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="education"
            label="Highest level of education completed"
            fullWidth
            autoComplete="education"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="workEx"
            label="Number of Years of Work Experience"
            fullWidth
            autoComplete="workEx"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="relevantExperiences"
            label="Relevant Experiences"
            helperText="Please indicate your notable projects, list your work history with the most recent employment."
            fullWidth
            autoComplete="relevantExperiences"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="visaStatus"
            label="Current Visa Status"
            fullWidth
            autoComplete="visaStatus"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            helperText="Will you now or in the future require employment sponsorship (e.g., visa, work permit) in the United States?
            Please indicate Yes or No."
            id="workAuth"
            label="Work Authorization Required"
            fullWidth
            autoComplete="workAuth"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="salary"
            label="Salary Expectation"
            helperText="Please indicate your annual compensation expectations, including base and bonus. (Optional)"
            fullWidth
            autoComplete="salary"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Save details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
