import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MainMenu from './components/DialogOpenRad'
import DialogRadParams from './components/DialogRadParams'

// import Plot from 'react-plotly.js';
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <MainMenu show={true}/>
        <DialogRadParams show={false}/>
      </Fragment>
    );
  }
}

export default App;
