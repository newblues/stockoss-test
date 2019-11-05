import React, { Component } from 'react';

import './counter.styles.css';

import CustomButton from '../custom-button/custom-button.components';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const initialCount = Number(id); // convert url params into number

    initialCount
      ? this.setState({
          count: initialCount,
          isCounting: true,
        })
      : this.setState({
          count: 0,
          isCounting: true,
        });
    this.startCounter();
  }

  startCounter = () => {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1, isCounting: true }));
    }, 1000);
  };

  stopCounter = () => {
    clearInterval(this.myInterval);
    this.setState({
      isCounting: false,
    });
  };

  resetCounter = () => {
    this.stopCounter();
    this.componentDidMount();
  };

  componentWillUnmount() {
    this.stopCounter(this.myInterval);
  }

  render() {
    const { count, isCounting } = this.state;
    console.log('TLC: Counter -> render -> isCounting', isCounting);
    return (
      <div className="wrap">
        <div className="card">
          <span className="span">{count}</span>
        </div>
        <div className="button-container">
          {isCounting ? (
            <CustomButton onClick={() => this.stopCounter()}>Stop</CustomButton>
          ) : (
            <CustomButton onClick={() => this.startCounter()}>Start</CustomButton>
          )}
          <CustomButton onClick={() => this.resetCounter()}>Reset</CustomButton>
        </div>
      </div>
    );
  }
}
