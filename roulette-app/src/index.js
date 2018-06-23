import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Roulette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      isStart: false
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  suffle() {
    const rand = Math.floor(Math.random() * 30) + 1;
    this.setState({ number: rand });
  }

  startRoulette() {
    this.interval = setInterval(() => this.suffle(), 50);
  }

  stopRoulette() {
    clearInterval(this.interval)
  }

  toggleButton() {
    if (this.state.isStart) {
      this.stopRoulette();
    } else {
      this.startRoulette();
    }

    this.setState((prevState) => ({
      isStart: !prevState.isStart
    }));
  }

  render() {
    return (
      <div>
        <p>number: {this.state.number}</p>
        <button onClick={this.toggleButton}>
          {this.state.isStart ? 'Stop': 'Start'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Roulette />, document.getElementById('root'));
registerServiceWorker();
