import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Attachment from "../Attachments/Attachment";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Component } from "react";

class ResumeUploadForm extends Component {
  state = {
    openForm: false,
    files: [],
  };

  openForm = () => {
    var { openForm } = this.state;
    openForm = true;
    this.setState({ openForm });
  };

  closeForm = () => {
    var { openForm } = this.state;
    openForm = false;
    this.setState({ openForm });
  };

  saveUploadedFiles = (filesToBeUploaded) => {
    var { files } = this.state;

    files = [...files, ...filesToBeUploaded];
    this.setState({
      files,
      openForm: false,
    });
  };
  onDelete = (f) => {
    var { files } = this.state;
    files = files.filter((file) => f !== file[0]);
    console.log(files);
    this.setState({
      files,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Resume / CV and Cover Letter
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Applying for this position requires a resume. Use this page to
            attach important information or documents that will help recruiters
            get to know you. Attach it below and get one step closer to your
            next job!
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" onClick={this.openForm}>
              Upload Document
            </Button>
            {/* <TextField
            required
            id="filetype"
            name="filetype"
            label="File Type (Resume/ Other Documents)"
            fullWidth
            autoComplete="file type"
            variant="standard"
          /> */}
          </Grid>
          <Grid item xs={12}>
            {this.state.files.length !== 0 && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Documents</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.files.map((file, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{file[0].name}</TableCell>
                      <TableCell>
                        <a
                          style={{ textDecoration: "none" }}
                          href={file[1]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="small" variant="outlined">
                            preview
                          </Button>
                        </a>
                        <Button
                          color="error"
                          size="small"
                          onClick={(idx) => this.onDelete(file[0])}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </Grid>
        </Grid>
        <Attachment
          closeForm={this.closeForm}
          open={this.state.openForm}
          updateList={this.updateList}
          saveUploadedFiles={this.saveUploadedFiles}
        ></Attachment>
      </React.Fragment>
    );
  }
}

export default ResumeUploadForm;
