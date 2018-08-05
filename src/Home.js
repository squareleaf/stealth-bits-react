import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_count: 0,
      computer_count: 0
    };
  }

  componentDidMount() {
    fetch('https://sb-backendapi.azurewebsites.net/api/Users')
      .then(response => response.json())
      .then(data => this.setState({ user_count: data.length }));

    fetch('https://sb-backendapi.azurewebsites.net/api/Computers')
      .then(response => response.json())
      .then(data => this.setState({ computer_count: data.length }));
  }

  render() {
    const { user_count, computer_count } = this.state;

    return (
      <div className="container">
        <Link to="/users">
          <div className="blue box group-info">
            <div className="header">Users</div>
            <i className="fas fa-user"></i>
            <div className="data">{ user_count }</div>
          </div>
        </Link>
      
        <Link to="/computers">
          <div className="blue box group-info">
            <div className="header">Computers</div>
            <i className="fas fa-desktop"></i>
            <div className="data">{ computer_count }</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Home;
