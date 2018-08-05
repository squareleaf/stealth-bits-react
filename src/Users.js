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
      <div class="container">
        <table>
          <tr>
            <th class="left blue">Display name</th>
            <th class="left blue">OS</th>
            <th class="left blue">OS version</th>
          </tr>
          {users.map(user =>
            <tr>
              <td class="left"><a href="">{user.displayname}</a></td>
              <td class="left">{user.email}</td>
              <td class="left">{user.lastLogon}</td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}

export default Users;
