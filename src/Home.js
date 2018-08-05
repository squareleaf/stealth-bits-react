import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/users">
          <div className="blue box group-info">
            <div className="header">Users</div>
            <i className="fas fa-user"></i>
            <div className="data"></div>
          </div>
        </Link>
      
        <Link to="/computers">
          <div className="blue box group-info">
            <div className="header">Computers</div>
            <i className="fas fa-desktop"></i>
            <div className="data"></div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Home;
