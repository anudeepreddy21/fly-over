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
      <Title>Recent Applications</Title>
      <Typography component="p" variant="h4">
        2462 Applicants 
        
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      Average pay for this Sponsored Project: $54/ hour
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
