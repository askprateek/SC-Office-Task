import React from 'react';
import BarData from '../store/Bardata';


export default class Sidebar extends React.Component{

  addData(e){
     var text = document.getElementById('text').value;
     var value = document.getElementById('value').value;
     console.log(this.props);
     Bardata.addData({text,value});
   }

  render(){
    return (
      <div class="sidebar">
      <ul id="slide-out" class="side-nav fixed">
        <div class="row title">
          <div class="col s12 center-align">
            <h4 class="thin"> Please Input Data for the Graphs</h4>
          </div>
        </div>
        <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <h5>Enter Bar Name(X-Axis)</h5>
              <input id="text" type="text" class="validate"></input>
            </div>
            <div class="input-field col s12">
            <h5>Enter Value (Y-Axis)</h5>
              <input id="value" type="text" class="validate"></input>
            </div>
            <div class="col s12">
              <a onClick = {this.addData.bind(this) } class="btn orange">Add Bar</a>
            </div>
          </div>
        </form>
      </div>
      </ul>
      </div>
    );
  }
}
