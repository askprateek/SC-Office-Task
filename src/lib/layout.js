import React from "react";
import BarChart from './chart/BarChart';
import BarData from './store/Bardata';

export default class Layout extends React.Component {

    addData(e){
      var text = document.getElementById('text').value;
      var value = document.getElementById('value').value;
      console.log(this.props);
      Bardata.addData({text,value});


    }

  render(){
    return (
        <div class="container">
          <div class="row">
            <div class = "col s12">
              <h1>For the Love of Barcharts and Other charts too</h1>
            </div>
          </div>
          <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6 m3">
              <input id="text" type="text" class="validate"></input>
              <label for="text">X Axis Value</label>
            </div>
            <div class="input-field col s6 m3">
              <input id="value" type="text" class="validate"></input>
              <label for="value">Value</label>
            </div>
            <div class="col s12 m3">
              <a onClick = {this.addData.bind(this) } class="waves-effect waves-light btn">button</a>
            </div>
          </div>
        </form>
      </div>

          <div class="row">
            <div class = "col s12">
              <BarChart />
            </div>
          </div>

        </div>
    );
  }
}
