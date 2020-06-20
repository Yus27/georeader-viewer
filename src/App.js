import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import DialogOpenRad from "./components/DialogOpenRad";
import DialogRadParams from "./components/DialogRadParams";
import MainMenu from "./components/MainMenu";
import Rad from "./components/Rad";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isRad: false,
      isOpening: false,
      isChangingProperties: false,
    };
  }

  onSelectMenuElement = (selectedKey) => {
    console.log("onSelectMenuElement");
    switch (selectedKey) {
      case "open":
        this.setState((prevState) => {
          return {
            ...prevState,
            isOpening: true,
            isChangingProperties: false,
          };
        });
        break;
      case "properties":
        this.setState((prevState) => {
          return {
            ...prevState,
            isOpening: false,
            isChangingProperties: this.state.data !== null,
          };
        });
        break;
      default:
        console.log("default");
    }
  };

  onOpenRad = (data) => {
    console.log("onOpenRad");
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpening: false,
        isChangingProperties: data !== null,
        data: data,
      };
    });
  };

  onCancelOpenRad = () => {
    console.log("onCancelOpenRad");
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpening: false,
        isChangingProperties: false,
      };
    });
  };

  onChangeParams = (params) => {
    console.log("onChangeParams");
    const oldData = this.state.data;
    let newData;
    if (oldData === null) newData = null;
    else newData = { ...oldData, ...params };
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpening: false,
        isChangingProperties: false,
        data: newData,
        isRad: newData !== null,
      };
    });
  };

  onCancelChangeParams = () => {
    console.log("onCancelChangeParams");
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpening: false,
        isChangingProperties: false,
      };
    });
  };

  onChangeStage = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, Stage: newValue };
    });
  };

  onChangeTimeBase = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, data: {...prevState.data, TimeBase: newValue} };
    });
  };

  onChangeAntDist = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, data: {...prevState.data, AntDist: newValue} };
    });
  };

  onChangeDefaultV = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, data: {...prevState.data, DefaultV: newValue} };
    });
  };

  onChangeGPRUnit = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, data: {...prevState.data, GPRUnit: newValue} };
    });
  };

  onChangeAntenName = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, data: {...prevState.data, AntenName: newValue} };
    });
  };

  onChangeFrequency = (event) => {
    const newValue = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, data: {...prevState.data, Frequency: newValue} };
    });
  };

  render() {
    let params = {
      Stage: 1.0,
      TimeBase: 512.0,
      AntDist: 0,
      DefaultV: 0.1,
      GPRUnit: "",
      AntenName: "",
      Frequency: 1000,
    };
    if (this.state.data !== null) {
      params = this.state.data;
    } 

    return (
      <Fragment>
        <MainMenu onSelectMenuElement={this.onSelectMenuElement} />
        <DialogOpenRad
          show={this.state.isOpening}
          onOpenRad={this.onOpenRad}
          onCancelOpenRad={this.onCancelOpenRad}
        />
        <DialogRadParams
          show={this.state.isChangingProperties}
          onChangeParams={this.onChangeParams}
          onCancelChangeParams={this.onCancelChangeParams}
          onChangeStage={this.onChangeStage}
          onChangeTimeBase={this.onChangeTimeBase}
          onChangeAntDist={this.onChangeAntDist}
          onChangeDefaultV={this.onChangeDefaultV}
          onChangeGPRUnit={this.onChangeGPRUnit}
          onChangeAntenName={this.onChangeAntenName}
          onChangeFrequency={this.onChangeFrequency}
          params={params}
        />
        <Rad show={this.state.isRad} data={this.state.data} />
      </Fragment>
    );
  }
}

export default App;
