import React from "react";
import Sidebar from './pages/Sidebar'
import Bardata from './store/Bardata';
import Chart from './chart/Chart';

export default class Layout extends React.Component {

  render(){
    return (

    <div class="row">
    <div class= "col s12">
      <Sidebar />
        <div class="main">
          <div class="row">
            <div class = "col s12 center-align">
              <h1 class= "thin">For the Love of Barcharts and Other charts too</h1>
            </div>
          </div>
          <div class="row charts">
          <div class="col s12">
              <Chart />
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}
