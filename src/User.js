import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://sb-backendapi.azurewebsites.net/api/Users/')
      .then(response => response.json())
      .then(data => this.setState({ user: data }));
  }

  render() {
    const { user } = this.state;

    return (
      <div className="container">
        <div className="blue box single-item">
          <div className="header">{ user.id }</div>
          <i className="fas fa-user"></i>
          <div className="data">{ user.displayname }</div>
          <div className="bio-info">
            { user.department } &#149; { user.title }<br />
            { user.email }
          </div>
          <div>{ user.lastLogon }</div>
          <div>{ user.homeDirectory } &#149; { user.domain }</div>
          <div>{ user.managerId }</div>
        </div>
      </div>
    );
  }
}

export default User;
