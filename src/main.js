import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Chart from './lib/chart/Chart';

import Layout from './lib/layout';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
   <Route path='/' component = { Layout }>
     <IndexRoute component={ Chart }></IndexRoute>

   </Route>
 </Router>
  , app);
