import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(
  id,
  date,
  name,
  company,
  projectConcentration,
  graduationDate
) {
  return { id, date, name, company, projectConcentration, graduationDate };
}

const rows = [
  createData(
    0,
    "26 Nov, 2022",
    "Parth Sanghavi",
    "Apple Inc",
    "Software Engineer",
    "Dec 2022"
  ),
  createData(
    1,
    "25 Nov, 2022",
    "Anudeep Reddy",
    "Meta",
    "Data Scientist",
    "Dec 2022"
  ),
  createData(
    2,
    "16 Nov, 2022",
    "Yash Gattani",
    "Qualcomm",
    "HCI Researcher",
    "May 2022"
  ),
  createData(3, "15 Nov, 2022", "Modi G", "OpenAI", "ML Engineer", "May 2022"),
  createData(
    4,
    "05 Nov, 2022",
    "Rohit Singh",
    "Google",
    "Software Engineer",
    "May 2023"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function SponsoredStudents() {
  return (
    <React.Fragment>
      <Title>Students with Sponsored Projects</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Project Concentration</TableCell>
            <TableCell>Graduation Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.projectConcentration}</TableCell>
              <TableCell>{row.graduationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Sponsored Projects and Project List
      </Link>
    </React.Fragment>
  );
}
