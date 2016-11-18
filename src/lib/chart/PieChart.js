import React from 'react';
import * as ReactD3 from 'react-d3-components';
import Bardata from '../store/Bardata';

export default class PieChart extends React.Component{

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
    var tooltipScatter = function(x, y) {
    return "x: " + x + " y: " + y;
  };
    var PieChart = ReactD3.PieChart;
    var sort = null;
    var data = {
      label: 'somethingA',
      values: this.state.values,
    }


    return(
      <div class="chart">
        <div class="row">
          <div class="col s12">
          <PieChart
                data={data}
                width={600}
                height={400}
                margin={{top: 10, bottom: 10, left: 100, right: 100}}
                sort={sort}
                />
          </div>
        </div>
      </div>
    );
  }
}
