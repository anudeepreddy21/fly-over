import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function TotalApplications() {
  return (
    <React.Fragment>
      <Title>Sponsored Students</Title>
      <Typography component="p" variant="h4">
        29 Students Sponsored 
        
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      Average pay for this Sponsored Project: $50/ hour
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
