import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Rad = {"Data": None, "Stage": 1.0, "TimeBase": 512, "AntDist": 0, "DefaultV": 0.1, "GPRUnit": "", "AntenName": "","Frequency": 1000, "Error": None}

class DialogRadParams extends React.Component {
  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title>GPR data properties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Stage, m</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Timebase, ns</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Antenna distance, m</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Default velocity, m/ns</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>GPR unit</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Antenna name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Central frequency, MHz</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DialogRadParams;
