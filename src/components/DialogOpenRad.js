import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

//const API_URL = "https://agile-escarpment-74931.herokuapp.com/";
const API_URL = "http://127.0.0.1:5000/";

class DialogOpenRad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loading: false,
    };
  }

  setLoading = (loading) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        loading: loading,
      };
    });
  };

  onFileChange = (event) => {
    console.log("onFileChange");
    if (event.target === null) return;
    if (event.target.files == null) return;
    const selectedFile = event.target.files[0];
    // console.log(selectedFile);
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedFile: selectedFile,
      };
    });
  };

  onFileUpload = async (event) => {
    console.log("onFileUpload");
    let data;
    if (this.state.selectedFile === null) {
      data = null;
    } else {
      const formData = new FormData();
      formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      this.setLoading(true);
      const res = await axios.post(API_URL, formData);
      data = res.data;
      console.log(data)
      if (data.Error === null) {
        this.setState((prevState) => {
          return {
            ...prevState,
            selectedFile: null,
          };
        });
        this.props.onOpenRad(data);
        this.setLoading(false);
      }
      else {
        alert(data.Error);
        data = null;
        this.setLoading(false);
      }
    }
  };

  render() {
    const btnCaption = !this.state.loading ? (
      "Open"
    ) : (
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );

    return (
      <Form>
        <Modal show={this.props.show} onHide={this.props.onCancelOpenRad}>
          <Modal.Header closeButton>
            <Modal.Title>Open GPR data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.File id="rad-file" onChange={this.onFileChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onCancelOpenRad}>
              Close
            </Button>
            <Button
              variant="primary"
              disabled={this.state.selectedFile === null}
              onClick={this.onFileUpload}
            >
              {btnCaption}
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    );
  }
}

export default DialogOpenRad;
