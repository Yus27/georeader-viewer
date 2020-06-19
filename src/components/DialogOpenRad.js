import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

//const API_URL = "https://agile-escarpment-74931.herokuapp.com/";
const API_URL = "http://127.0.0.1:5000/";

class DialogOpenRad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      data: null,
    };
  }

  onFileChange = (event) => {
    this.setState((prevState) => {
      console.log(event.target.files[0]);
      return {
        ...prevState,
        selectedFile: event.target.files[0],
      };
    });
  };

  onFileUpload = async (event) => {
    if (this.state.selectedFile === null) return;
    const formData = new FormData();
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    const res = await axios.post(API_URL, formData);
    this.setState((prevState) => {
      return {
        ...prevState,
        data: res.data,
      };
    });
  };

  render() {
    return (
      <Form>
        <Modal show={this.props.show}>
          <Modal.Header closeButton>
            <Modal.Title>Open GPR data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formGPRKind">
              <Form.Control as="select">
                <option>ЛОЗА (txt)</option>
                <option>ОКО (gpr)</option>
                <option>ОКО (gpr2)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGPRKind">
              <Form.File id="rad-file" onChange={this.onFileChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary" onClick={this.onFileUpload}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    );
  }
}

export default DialogOpenRad;
