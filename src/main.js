import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import BarChart from './lib/chart/BarChart';
import PieChart from './lib/chart/PieChart';

import Layout from './lib/layout';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
   <Route path='/' component = { Layout }>
     <IndexRoute component={ BarChart }></IndexRoute>
     <Route path="/pie" component={ PieChart }></Route>

   </Route>
 </Router>
  , app);
