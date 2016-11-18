import React from 'react';
import * as ReactD3 from 'react-d3-components';
import Bardata from '../store/Bardata';

export default class BarChart extends React.Component{

  constructor() {
    super();

    this.state = {
      values : Bardata.getData()
    }
  }

  componentWillMount() {
    Bardata.on('change', () =>{
        this.setState({
          values : Bardata.getData()
        })
    })
  }

  render(){
    var BarChart = ReactD3.BarChart;
    var tooltipScatter = function(x, y) {
    return "x: " + x + " y: " + y;
  };

    var data = {
      label: 'somethingA',
      values: this.state.values,
    }


    return(
      
    );
  }
}
