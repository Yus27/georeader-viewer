import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Rad = {"Data": None, "Stage": 1.0, "TimeBase": 512, "AntDist": 0, "DefaultV": 0.1, "GPRUnit": "", "AntenName": "","Frequency": 1000, "Error": None}

class DialogRadParams extends React.Component {
  constructor() {
    super();
    this.defaultState = {
      Stage: 1.0,
      TimeBase: 512.0,
      AntDist: 0,
      DefaultV: 0.1,
      GPRUnit: "",
      AntenName: "",
      Frequency: 1000,
    };
    this.state = { ...this.defaultState };
  }

  componentDidMount() {
    // this.refreshData();
  }

  // refreshData = () => {
  //   if (this.props.data === null) return;
  //   if (
  //     this.props.data.Stage !== this.state.Stage ||
  //     this.props.data.TimeBase !== this.state.TimeBase ||
  //     this.props.data.AntDist !== this.state.AntDist ||
  //     this.props.data.DefaultV !== this.state.DefaultV ||
  //     this.props.data.GPRUnit !== this.state.GPRUnit ||
  //     this.props.data.AntenName !== this.state.AntenName ||
  //     this.props.data.Frequency !== this.state.Frequency
  //   )
  //     this.setState((prevState) => {
  //       let newState = { ...prevState };
  //       if (this.props.data.Stage !== null)
  //         newState.Stage = this.props.data.Stage;
  //       if (this.props.data.TimeBase !== null)
  //         newState.TimeBase = this.props.data.TimeBase;
  //       if (this.props.data.AntDist !== null)
  //         newState.AntDist = this.props.data.AntDist;
  //       if (this.props.data.DefaultV !== null)
  //         newState.DefaultV = this.props.data.DefaultV;
  //       if (this.props.data.GPRUnit !== null)
  //         newState.GPRUnit = this.props.data.GPRUnit;
  //       if (this.props.data.AntenName !== null)
  //         newState.AntenName = this.props.data.AntenName;
  //       if (this.props.data.Frequency !== null)
  //         newState.Frequency = this.props.data.Frequency;
  //       return newState;
  //     });
  // };

  static getDerivedStateFromProps(props, current_state) {
    if (props.data === null) return;
    if (
      props.data.Stage !== current_state.Stage ||
      props.data.TimeBase !== current_state.TimeBase ||
      props.data.AntDist !== current_state.AntDist ||
      props.data.DefaultV !== current_state.DefaultV ||
      props.data.GPRUnit !== current_state.GPRUnit ||
      props.data.AntenName !== current_state.AntenName ||
      props.data.Frequency !== current_state.Frequency
    ) {
      let newState = { ...current_state };
      if (props.data.Stage !== null) newState.Stage = props.data.Stage;
      if (props.data.TimeBase !== null) newState.TimeBase = props.data.TimeBase;
      if (props.data.AntDist !== null) newState.AntDist = props.data.AntDist;
      if (props.data.DefaultV !== null) newState.DefaultV = props.data.DefaultV;
      if (props.data.GPRUnit !== null) newState.GPRUnit = props.data.GPRUnit;
      if (props.data.AntenName !== null)
        newState.AntenName = props.data.AntenName;
      if (props.data.Frequency !== null)
        newState.Frequency = props.data.Frequency;
      return newState;
    }
  }

  onChangeStage = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, Stage: newValue };
    });
  };

  onChangeTimeBase = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, TimeBase: newValue };
    });
  };

  onChangeAntDist = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, AntDist: newValue };
    });
  };

  onChangeDefaultV = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, DefaultV: newValue };
    });
  };

  onChangeGPRUnit = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, GPRUnit: newValue };
    });
  };

  onChangeAntenName = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, AntenName: newValue };
    });
  };

  onChangeFrequency = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, Frequency: newValue };
    });
  };

  onChangeParams = () => {
    this.props.onChangeParams(this.state);
  };

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
                value={this.state.Stage}
                onChange={this.onChangeStage}
                min={0.001}
                max={10000}
                step={1}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Timebase, ns</Form.Label>
              <Form.Control
                type="number"
                value={this.state.TimeBase}
                onChange={this.onChangeTimeBase}
                min={0.1}
                max={100000}
                step={0.5}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Antenna distance, m</Form.Label>
              <Form.Control
                type="number"
                value={this.state.AntDist}
                onChange={this.onChangeAntDist}
                min={0.0}
                max={100}
                step={0.1}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Default velocity, m/ns</Form.Label>
              <Form.Control
                type="number"
                value={this.state.DefaultV}
                onChange={this.onChangeDefaultV}
                min={0.0}
                max={0.3}
                step={0.001}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>GPR unit</Form.Label>
              <Form.Control
                type="text"
                value={this.state.GPRUnit}
                onChange={this.onChangeGPRUnit}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Antenna name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.AntenName}
                onChange={this.onChangeAntenName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Central frequency, MHz</Form.Label>
              <Form.Control
                type="number"
                value={this.state.Frequency}
                onChange={this.onChangeFrequency}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onCancelChangeParams}>
            Close
          </Button>
          <Button variant="primary" onClick={this.onChangeParams}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DialogRadParams;
