import React from 'react';
import BarData from '../store/Bardata';

export default class Sidebar extends React.Component{

  constructor(){
    super();
    this.state={
      option:['None']
    }
  }



  setSelectBoxes(e){
    var xmlHttp = null;
    var theUrl = e.target.value;
    console.log(theUrl.substr(-3));
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var data = JSON.parse(xmlHttp.responseText);
    var text,value;
    var keySelect = Object.keys(data[0]);
    this.state.option = keySelect;
    var select = keySelect.map(function(keySelect, id){
      return <option key={id} value = {keySelect}>{keySelect}</option>;
    })
    this.setState({option:select});
    console.log(this.state.option);


    // console.log(data.length);
    // for (var i=0; i <data.length; i++ ){
    //   text = data[i].Title;
    //   value = data[i].imdbRating;
    //   Bardata.addData({text,value});
    //   // console.log(text,value)
    // }
  }
  addJsonData(){
    var xmlHttp = null;
    var theUrl = document.getElementById('json').value;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var data = JSON.parse(xmlHttp.responseText);
    var text=document.getElementById('x-key').value,
        value=document.getElementById('y-value').value;
    // console.log(data,text,value);

    for (var i=0; i <data.length; i++ ){
      if (!isNaN(data[i][value])){
      var x = data[i][text];
      var y = parseInt(data[i][value]);
      // console.log(data[i][text], data[i][value])
      Bardata.addData({x,y});
      // console.log(x,y)
    }
    }

  }

  addSingleData(){
     var x = document.getElementById('text').value;
     var y = document.getElementById('value').value;
    //  console.log(this.props);
     Bardata.addData({x,y});

   }
value
  render(){
    return (
      <div class="sidebar">
      <ul id="slide-out" class="side-nav fixed">
        <div class="row">
          <div class="col s12 center-align">
            <h5> Enter Independent values</h5>
          </div>
        </div>
        <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <h5>Enter Bar Name(X-Axis)</h5>
              <input id="text" type="text" class="validate"></input>
            </div>
            <div class="col s12">
              <h5>Enter Value (Y-Axis)</h5>
            </div>
            <div class="row">
            <div class="input-field col s6">
              <input id="value" type="text" class="validate"></input>
            </div>
            <div class="input-field col s6">
              <a onClick = {this.addSingleData.bind(this) } class="btn">Add Bar</a>
            </div>
            </div>
          </div>
        </form>
        </div>

        <div class="row json">
        <div class="col s12">
        <div class="row col s12 center-align">
          <h5>Enter URL for Json Data</h5>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id ="json" type="text" onChange= { this.setSelectBoxes.bind(this) } ></input>
          </div>
          <div class="row col s12">
          <p>Select the Key (X-Axis)</p>
          <select id ="x-key">
            {this.state.option}
          </select>
          </div>

          <div class="row col s12">
          <p>Select the Corresponding values (Y-Axis:Integer only)</p>
          <select id = "y-value">
            {this.state.option}
          </select>
          </div>
          <div class="row">
            <div class="col s12">
              <a class= "btn" onClick={ this.addJsonData.bind(this) }>Draw Charts</a>
            </div>
          </div>

         </div>
        </div>
        </div>
      </ul>
      </div>
    );
  }
}
