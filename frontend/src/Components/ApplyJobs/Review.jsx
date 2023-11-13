import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const basicInfo = [
  { name: "Name", detail: "Parth Sanghavi" },
  { name: "Email", detail: "sanghaviparth99@vt.edu" },
  { name: "Phone Number", detail: "55286325" },
  { name: "Address", detail: "1401 Seneca Drive, Blacksburg, VA, 24060, US" },
  { name: "Resume", detail: "Attached" },
];

const jobSpecificQuestion = [
  { name: "Education", detail: "Masters" },
  { name: "Work Experience", detail: "4 years" },
  { name: "Current Visa Status", detail: "F1" },
  { name: "Work Authorization", detail: "Yes" },
  { name: "Salary Expectation", detail: "$250,000" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review and Submit
      </Typography>
      <Typography variant="h7" gutterBottom sx={{ fontWeight: 700 }}>
        Contact Information
      </Typography>
      <List disablePadding>
        <Grid container>
          {basicInfo.map((basicInfo) => (
            <React.Fragment key={basicInfo.firstName}>
              <Grid item xs={6}>
                <Typography gutterBottom>{basicInfo.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{basicInfo.detail}</Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h7" gutterBottom sx={{ mt: 2, fontWeight: 700 }}>
            Job Specific Details
          </Typography>
          <Grid container>
            {jobSpecificQuestion.map((jobSpecificQuestion) => (
              <React.Fragment key={jobSpecificQuestion.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    {jobSpecificQuestion.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    {jobSpecificQuestion.detail}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2, fontWeight: 700 }}>
            Confirmatin
          </Typography>
          <Typography gutterBottom>
            By my eSignature below, I certify that I have read, fully understand
            and accept all terms of the foregoing statement.
          </Typography>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="sign"
              name="sign"
              label="E-signature"
              fullWidth
              autoComplete="sign"
              variant="standard"
            />
          </Grid>
          <br />
          <Typography gutterBottom>Date: 7 Nov 2022</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
