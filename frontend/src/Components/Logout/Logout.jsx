import React from "react";
import { Grid, Paper, Avatar, Button, Typography } from "@mui/material";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Link } from "react-router-dom";

const Logout = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 500,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
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
          width={1600}
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
              <h1>Logged Out</h1>
            </Grid>
            <Typography gutterBottom gutterTop sx={{ mt: 10, fontWeight: 500 }}>
              <h2>Thank you for growing with FlyOver.</h2>
            </Typography>
            <Typography
              gutterBottom
              gutterTop
              sx={{ mt: 5, mb: 5, mr: 5, ml: 5, fontWeight: 500 }}
            >
              <h4> You are being Logged out Successfully. </h4>
              <Typography
                gutterBottom
                gutterTop
                sx={{ mt: 5, mb: 3, mr: 5, ml: 5, fontWeight: 500 }}
              >
                <Link
                  to="/login"
                  style={{ textDecoration: "none", paddingTop: 10 }}
                >
                  <Button variant="contained">
                    {"  Click here to Sign in Again"}
                  </Button>
                </Link>
              </Typography>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Logout;
