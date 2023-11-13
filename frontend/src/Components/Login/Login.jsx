import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 500,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  function processForgotPassword() {
    axios
      .get(baseURL + "/login/forgot-password/sanghaviparth99@vt.edu")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

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
                <HttpsOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            <TextField
              label="Username or Email"
              placeholder="Enter username"
              fullWidth
              required
            />{" "}
            <br /> <br />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign in
              </Button>
            </Link>
            <Typography>
              <Button
                style={{ textTransform: "lowercase" }}
                onClick={processForgotPassword}
              >
                Forgot password ?
              </Button>
            </Typography>
            <Typography>
              {" "}
              Do you have an account ?<Link to="/signup">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
