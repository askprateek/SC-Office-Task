import React from "react";
import Sidebar from './pages/Sidebar'
import BarData from './store/Bardata';

export default class Layout extends React.Component {


  render(){
    return (

    <div class="row">
    <div class= "col s12">
      <Sidebar />
        <div class="main">
          <div class="row">
            <div class = "col s12">
              <h1>For the Love of Barcharts and Other charts too</h1>
            </div>
          </div>
          <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s3"><a href="#bar">BarChart</a></li>
              <li class="tab col s3"><a href="#pie">Test 2</a></li>
            </ul>
          </div>
          <div id="bar" class="col s12">Test 1</div>
          <div id="pie" class="col s12">Test 2</div>
        </div>

        </div>
      </div>
    </div>
    );
  }
}
