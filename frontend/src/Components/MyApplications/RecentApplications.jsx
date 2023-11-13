import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, jobTitle, location, organization, status) {
  return { id, date, jobTitle, location, organization, status };
}

const rows = [
  createData(
    0,
    "15 Nov, 22",
    "Software Engineer I (1364350)",
    "Multiple Locations, United States",
    "DataBricks",
    "Selected - Full-time"
  ),
  createData(
    1,
    "12 Nov, 22",
    "Senior Product Manager (1487539)",
    "Redmond, Washington, United States ",
    "Microsoft",
    "In Review"
  ),
  createData(
    2,
    "08 Nov, 22",
    "Senior Software Engineer (1436836)",
    "California, United States",
    "Apple",
    "Interview Scheduled - Round 1"
  ),
  createData(
    3,
    "08 Nov, 22",
    "Senior Software Engineer (1482790)",
    "Bellevue, Washington, United States",
    "Google",
    "In Review"
  ),
  createData(
    4,
    "06 Nov, 22",
    "Frontend Engineer (1476583)",
    "Job available in 7 locations",
    "Amazon",
    "Interview Scheduled - Round 2"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function RecentApplications() {
  return (
    <React.Fragment>
      <Title>Submitted Applications</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Organization</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Updated On</TableCell>
            <TableCell>Location</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
               <TableCell>{row.organization}</TableCell>
              <TableCell href="#" onClick={preventDefault}>{row.jobTitle}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See past applications
      </Link>
    </React.Fragment>
  );
}
