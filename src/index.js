import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from "./Users";
import Computers from "./Computers";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
