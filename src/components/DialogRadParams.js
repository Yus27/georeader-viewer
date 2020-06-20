import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Rad = {"Data": None, "Stage": 1.0, "TimeBase": 512, "AntDist": 0, "DefaultV": 0.1, "GPRUnit": "", "AntenName": "","Frequency": 1000, "Error": None}

class DialogRadParams extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onCancelChangeParams}>
        <Modal.Header closeButton>
          <Modal.Title>GPR data properties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Stage, m</Form.Label>
              <Form.Control
                type="number"
                value={this.props.params.Stage}
                onChange={this.props.onChangeStage}
                min={0.001}
                max={10000}
                step={1}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Timebase, ns</Form.Label>
              <Form.Control
                type="number"
                value={this.props.params.TimeBase}
                onChange={this.props.onChangeTimeBase}
                min={0.1}
                max={100000}
                step={0.5}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Antenna distance, m</Form.Label>
              <Form.Control
                type="number"
                value={this.props.params.AntDist}
                onChange={this.props.onChangeAntDist}
                min={0.0}
                max={100}
                step={0.1}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Default velocity, m/ns</Form.Label>
              <Form.Control
                type="number"
                value={this.props.params.DefaultV}
                onChange={this.props.onChangeDefaultV}
                min={0.0}
                max={0.3}
                step={0.001}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>GPR unit</Form.Label>
              <Form.Control
                type="text"
                value={this.props.params.GPRUnit}
                onChange={this.props.onChangeGPRUnit}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Antenna name</Form.Label>
              <Form.Control
                type="text"
                value={this.props.params.AntenName}
                onChange={this.props.onChangeAntenName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Central frequency, MHz</Form.Label>
              <Form.Control
                type="number"
                value={this.props.params.Frequency}
                onChange={this.props.onChangeFrequency}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onCancelChangeParams}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.onChangeParams}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DialogRadParams;
