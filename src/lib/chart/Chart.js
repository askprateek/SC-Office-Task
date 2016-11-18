import React from 'react';
import * as ReactD3 from 'react-d3-components';
import Bardata from '../store/Bardata';

export default class Chart extends React.Component{

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
    var PieChart = ReactD3.PieChart;
    var tooltipScatter = function(x, y) {
    return "x: " + x + " y: " + y;
  };
    var sort = null;
    var data = {
      label: 'somethingA',
      values: this.state.values,
    }


    return(
      <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s3"><a href="#bar">BarChart</a></li>
          <li class="tab col s3"><a href="#pie">PieChart</a></li>
        </ul>
      </div>
      <div id="bar" class="col s12">

        <div class="row chart">
          <div class="col s12">
          <BarChart
            data={data}
            width={800}
            height={400}
            tooltipHtml={tooltipScatter}
            margin={{top: 10, bottom: 50, left: 50, right: 10}} />
          </div>
        </div>
      </div>

      <div id="pie" class="col s12">
      <div class="row chart">
        <div class="col s12">
      <PieChart
            data={data}
            width={800}
            height={400}
            margin={{top: 10, bottom: 10, left: 100, right: 100}}
            sort={sort}
            />
          </div>
        </div>
      </div>
    </div>

    );
  }
}
