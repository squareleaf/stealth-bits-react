import React, { Component } from 'react';

class Computers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computers: []
    };
  }

  componentDidMount() {
    fetch('https://sb-backendapi.azurewebsites.net/api/Computers')
      .then(response => response.json())
      .then(data => this.setState({ computers: data }));
  }

  render() {
    const { computers } = this.state;

    return (
      <div className="container">
        <table>
        <tbody>
          <tr>
            <th className="left blue">Display name</th>
            <th className="left blue">OS</th>
            <th className="left blue">OS version</th>
          </tr>
          {computers.map(computer =>
            <tr>
              <td className="left">{computer.displayname}</td>
              <td className="left">{computer.os}</td>
              <td className="left">{computer.osVersion}</td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    );
  }
}

export default Computers;
