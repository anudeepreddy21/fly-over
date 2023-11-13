import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

function Main(props) {
  const {
    posts,
    title,
    description,
    responsibilitiesTitle,
    responsibilities,
    basicQualitificationsTitle,
    basicQualitifications,
    prefferedQualitificationsTitle,
    prefferedQualitifications,
  } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {description}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {responsibilitiesTitle}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <Typography variant="subtitle1">{responsibilities}</Typography>
      </Typography>
      <Typography variant="h4" gutterBottom>
        {basicQualitificationsTitle}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {basicQualitifications}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {prefferedQualitificationsTitle}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {prefferedQualitifications}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Main;
