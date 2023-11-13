import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Sidebar(props) {
  const { pastProjects, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <div className="col-lg-4 col-md-12 col-xs-12">
        <div className="sideber">
          <div className="widghet">
            <h3>Project Location</h3>
            <div className="maps">
              <div id="map" className="map-full">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405691.57240383344!2d-122.3212843181106!3d37.40247298383319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon+Valley%2C+CA%2C+USA!5e0!3m2!1sen!2sbd!4v1538319316724"
                  allowFullScreen={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Amazon's Diversity Commitment
      </Typography>
      <Typography variant="h9" gutterBottom sx={{ mt: 3 }}>
      Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, protected veteran status, disability, age, or other legally protected status. For individuals with disabilities who would like to request an accommodation, please visit https://www.amazon.jobs/en/disability/us      </Typography>
      {/* {diversity.map((diversity) => (
        <Typography
          display="block"
          variant="body1"
          href={diversity.diversityTitle}
          key={diversity.diversityDescription}
        >
          {diversity.title}
        </Typography>
      ))} */}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Past Events
      </Typography>
      {pastProjects.map((pastProjects) => (
        <Link
          display="block"
          variant="body1"
          href={pastProjects.url}
          key={pastProjects.title}
        >
          {pastProjects.title}
        </Link>
      ))}
      
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  pastProjects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
