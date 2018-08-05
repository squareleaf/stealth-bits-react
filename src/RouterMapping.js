import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Users from "./Users";
import Computers from "./Computers";
import Home from "./Home";

const RouterMapping = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/computers" component={Computers}/>
      <Route path="/users" component={Users}/>
    </div>
  </Router>
);

export default RouterMapping;
