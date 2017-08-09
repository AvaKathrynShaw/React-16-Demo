import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React 16</h2>
        </div>
        <p className="App-intro">
        <div>
          <p>
            <b>
              This is an example of error boundaries in React 16.
              <br /><br />
              Click on the numbers to increase the counters.
              <br />
              The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
            </b>
          </p>
          <hr />
          <ErrorBoundary>
            <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
          <hr />
          <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
          <ErrorBoundary><BuggyCounter /></ErrorBoundary>
          <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        </div>
        </p>
      </div>
    );
  }
}

export default App;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}
