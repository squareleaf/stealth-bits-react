import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Users from "./Users";
import Computers from "./Computers";

class App extends Component {
  render() {
    return (
      <div class="container">
          <div class="blue box group-info">
            <div class="header">Users</div>
            <i class="fas fa-user"></i>
            <div class="data"></div>
          </div>
      
          <div class="blue box group-info">
            <div class="header">Computers</div>
            <i class="fas fa-desktop"></i>
            <div class="data"></div>
          </div>
      </div>
    )
  }
}

export default App;
