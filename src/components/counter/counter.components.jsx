import React, { Component } from 'react';

import './counter.styles.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const initialCount = Number(id); // convert url params into number

    initialCount
      ? this.setState({
          count: initialCount,
        })
      : this.setState({
          count: 0,
        });
    this.doIntervalChange();
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
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
