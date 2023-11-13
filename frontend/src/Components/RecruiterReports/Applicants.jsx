import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, university, paymentMethod, status) {
  return { id, date, name, university, paymentMethod, status };
}

const rows = [
  createData(
    0,
    "06 Nov, 2022",
    "Parth Sanghavi",
    "Virginia Tech",
    "MEng Computer Science - Advanced Software Engineering",
    "Selected - Full-time"
  ),
  createData(
    1,
    "06 Nov, 2022",
    "Aadesh Agarwal",
    "Rice University",
    "MS. Non-Thesis Computer Engineering - ML/AI",
    "In Review - Round 3"
  ),
  createData(
    2,
    "06 Nov, 2022",
    "Ali Nauman",
    "Virginia Tech",
    "MEng. Computer Engineering - HCI",
    "Interview Scheduled - Round 1"
  ),
  createData(
    3,
    "05 Nov, 2022",
    "Modi G",
    "Virginia Tech",
    "UnderGrad - MEng. Integrated - Computer Science",
    "Rejected"
  ),
  createData(
    4,
    "05 Nov, 2022",
    "Parth Sanghavi",
    "University of Maryland",
    "MS. Software Engineering",
    "Selected - Round 2"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Applicants() {
  return (
    <React.Fragment>
      <Title>Recent Applicants</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>University</TableCell>
            <TableCell>Course</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.university}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more applicants
      </Link>
    </React.Fragment>
  );
}
