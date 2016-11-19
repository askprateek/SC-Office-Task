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
    });
  }

  render(){
    var BarChart = ReactD3.BarChart;
    var PieChart = ReactD3.PieChart;
    var tooltipScatter = function(x, y0, y) {
    return `${x} = ${y} `;
  };
    var sort = null;
    var xScale = d3.scale.linear([0, Bardata.getMax()]);

    // console.log(Bardata.getMax());
    var data = {
      label: 'somethingA',
      values: this.state.values,
    }
    var x= 0;
    console.log(this.state.values);
    if (data.values.length>0){
    return(
      <div class="row">
      <div class="col s12 border">
        <ul class="tabs">
          <li class="tab col s3"><a href="#bar">BarChart</a></li>
          <li class="tab col s3"><a href="#pie">PieChart</a></li>
        </ul>
      </div>
      <div id="bar" class="col s12">

        <div class="row center-align">
          <div class="col s12">
          <BarChart
            data={data}
            width={800}
            height={500}
            tooltipHtml={tooltipScatter}
            margin={{top: 50, bottom: 50, left: 50, right: 10}} />
          </div>
        </div>
      </div>

      <div id="pie" class="col s12">
      <div class="row center-align">
        <div class="col s12">
      <PieChart
            data={data}
            width={800}
            height={500}
            margin={{top: 50, bottom: 10, left: 100, right: 100}}
            sort={sort}
            />
          </div>
        </div>
      </div>
    </div>

    );
  }
  else{
    return (
      <div class="row">
        <div class="col s12">
          <h4>Please Add Data for the charts by using any of the method given in the Sidebar.</h4>
        </div>
      </div> );
  }
  }
}
