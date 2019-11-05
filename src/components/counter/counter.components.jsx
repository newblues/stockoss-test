import React, { Component } from 'react';

import './counter.styles.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div className="wrap">
        <div className="card">
          <span className="span">{count}</span>
        </div>
      </div>
    );
  }
}
