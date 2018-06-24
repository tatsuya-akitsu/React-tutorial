import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/counter';

class App extends Component {
  _handlePlusOneClick(e) {
    e.preventDefault();
    this.props.dispatch(increment(1));
  }

  _handleMinusOneClick(e) {
    e.preventDefault();
    this.props.dispatch(decrement(1));
  }

  render() {
    const count = this.props.count;
    return (
      <div>
        <button onClick={(e) => this._handleMinusOneClick(e)}>-1</button>
        <span>{count}</span>
        <button onClick={(e) => this._handlePlusOneClick(e)}>+1</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(App);
