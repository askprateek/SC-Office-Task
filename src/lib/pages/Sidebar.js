import React from 'react';
import BarData from '../store/Bardata';


export default class Sidebar extends React.Component{

  hitUrl(theUrl)
  {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

  addJsonData(e){
    // http://localhost:8080/static/data.json;
    var xmlHttp = null;
    var theUrl = e.target.value;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var data = JSON.parse(xmlHttp.responseText);
    var text,value;
    // console.log(data.length);
    for (var i=0; i <data.length; i++ ){
      text = data[i].Title;
      value = data[i].imdbRating;
      Bardata.addData({text,value});
      console.log(text,value)
    }
  }

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


        <div class="row">
        <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id ="json" type="text" onChange= { this.addJsonData.bind(this) } ></input>
          </div>
         </div>
        </div>
        </div>
      </ul>
      </div>
    );
  }
}
