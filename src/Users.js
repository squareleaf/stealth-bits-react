import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user_count: 0
    };
  }

  componentDidMount() {
    fetch('https://sb-backendapi.azurewebsites.net/api/Users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, user_count: data.length }));
  }

  render() {
    const { users, user_count } = this.state;

    return (
      <div className="container">
        <table>
        <tbody>
          <tr>
            <th className="left blue">Display name</th>
            <th className="left blue">OS</th>
            <th className="left blue">OS version</th>
          </tr>
          {users.map(user =>
            <tr>
              <td className="left"><a href="">{user.displayname}</a></td>
              <td className="left">{user.email}</td>
              <td className="left">{user.lastLogon}</td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
