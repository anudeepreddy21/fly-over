import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "../Title";
import "./PartneringSponsors.css";

function preventDefault(event) {
  event.preventDefault();
}

const companies = ["amazon", "apple", "boeing", "google", "meta"];

export default function PartneringSponsors() {
  return (
    <React.Fragment>
      <Title>Partnering Organizations</Title>
      <Typography component="p" variant="h4">
        9 Sponsors
      </Typography>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {companies.map((company, idx) => (
          <img
            className="img_a"
            alt="logoaldfml"
            src={require(`../../../assets/logos/${company
              .toString()
              .toLowerCase()}-logo.png`).default}
          ></img>
        ))}
      </div>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Click here to know more.
        </Link>
      </div>
    </React.Fragment>
  );
}
