import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Component } from "react";
import "./Attachment.css";

class Attachments extends Component {
  state = {
    // outputSrc: "",
    // openForm: false,
    files: [],
  };

  updateList = (e) => {
    // console.log(e);
    var { files } = this.state;
    let filesTmp = e.target.files;
    for (let f of filesTmp) {
      files.push([f, URL.createObjectURL(f)]);
    }
    // console.log(files);
    // console.log(URL.createObjectURL(e.target.files[0]));
    this.setState({
      files,
    });
  };
  // var input = document.getElementById('file');
  // var output = document.getElementById('fileList');
  // var children = "";
  // for (var i = 0; i < input.files.length; ++i) {
  //     children +=  '<li>'+ input.files.item(i).name + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>'
  // }
  // output.innerHTML = children;
  // };
  onDelete = (f) => {
    var { files } = this.state;
    files = files.filter((file) => f !== file[0]);
    console.log(files);
    this.setState({
      files,
    });
  };
  reset = () => {
    this.setState({ files: [] });
  };
  render() {
    return (
      <Dialog open={this.props.open}>
        <form className="form-container">
          <label>Document Type</label>
          <br />
          <input type="text" id="title" name="title" />
          <br />
          <label>Qualifications</label>
          <br />
          <input type="text" id="description" name="description" />
          <br />
          <br />

          <p>Click on the "Choose File" button to upload a file:</p>

          <Button variant="contained" component="label">
            Upload
            <input type="file" hidden multiple onChange={this.updateList} />
          </Button>
          {/* {this.state.outputSrc && (
            <img
              style={{ width: 300, height: 250 }}
              alt=""
              id="output"
              src={this.state.outputSrc}
            />
          )} */}
          <Button
            className="btn cancel"
            style={{
              marginTop: 20,
              backgroundColor: "#1976d2",
              padding: "10px",
            }}
            onClick={() => {
              this.props.saveUploadedFiles(this.state.files);
              this.reset();
            }}
          >
            Save
          </Button>
          <Button
            className="btn cancel"
            style={{
              marginTop: 5,
              color: "#1976d2",
              backgroundColor: "transparent",
              borderColor: "#1976d2",
              padding: "10px",
            }}
            onClick={() => {
              this.reset();
              this.props.closeForm();
            }}
          >
            Close
          </Button>
        </form>
        {this.state.files.length !== 0 && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Resume Versions</TableCell>
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
      </Dialog>
    );
  }
}

export default Attachments;