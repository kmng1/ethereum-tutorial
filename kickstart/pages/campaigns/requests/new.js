import React, { Component } from 'react';

class RequestNew extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  render() {
    return <h3>Create a Request</h3>
  }
}

export default RequestNew;
