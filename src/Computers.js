import React, { Component } from 'react';

class Computers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computers: [],
      computer_count: 0
    };
  }

  componentDidMount() {
    fetch('https://sb-backendapi.azurewebsites.net/api/Computers')
      .then(response => response.json())
      .then(data => this.setState({ computers: data, computer_count: data.length }));
  }

  render() {
    const { computers, computer_count } = this.state;

    return (
      <div class="container">
        <table>
          <tr>
            <th class="left blue">Display name</th>
            <th class="left blue">OS</th>
            <th class="left blue">OS version</th>
          </tr>
          {computers.map(computer =>
            <tr>
              <td class="left">{computer.displayname}</td>
              <td class="left">{computer.os}</td>
              <td class="left">{computer.osVersion}</td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}

export default Computers;
