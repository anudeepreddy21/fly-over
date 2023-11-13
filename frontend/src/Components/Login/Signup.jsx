import React from "react";
import {
  Radio,
  RadioGroup,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Signup = () => {
  const paperStyle = {
    padding: 20,
    width: 500,
    //margin: "0 auto",
    paddingTop: "20",
  };
  const headerStyle = { margin: 10 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
        width: "100%",
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1, float: "left", margin: 20, paddingTop: 50 }}>
        <img
          src={require("../../assets/flyover.png").default}
          width={600}
          height={400}
          alt="flyover-logo"
        />
      </div>
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          float: "right",
          paddingRight: 60,
        }}
      >
        <Grid>
          <Paper style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 style={headerStyle}>Sign Up</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to create an account !
              </Typography>{" "}
              <br /> <br />
            </Grid>
            <form>
              <TextField fullWidth label="Name" placeholder="Enter your name" />{" "}
              <br /> <br />
              <TextField
                fullWidth
                label="Email"
                placeholder="Enter your email"
              />{" "}
              <br /> <br />
              <TextField
                fullWidth
                label="Password"
                placeholder="Enter your password"
              />{" "}
              <br /> <br />
              <TextField
                fullWidth
                label="Confirm Password"
                placeholder="Confirm your password"
              />{" "}
              <br /> <br />
              <TextField
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
              />{" "}
              <br /> <br />
              <FormControl component="fieldset" style={marginTop}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="nonBinary"
                    control={<Radio />}
                    label="Don't wish to specify"
                  />
                </RadioGroup>
              </FormControl>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
              />{" "}
              <br /> <br />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign up
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Signup;
