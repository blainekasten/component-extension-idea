import React from 'react';
import Component from './Component';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';

const updateFoo = (value) => ({type: 'UPDATE_FOO', value});

class App extends Component {
  static contextTypes = {
    foo: PropTypes.string,
  };

  constructor(...args) {
    super(...args);
    console.log(this.appState);
  }

  appState = (state) => ({
    foo: state.foo,
  });

  actions = {
    updateFoo,
  };

  componentWillMount() {
    console.log('mount me')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.actions.updateFoo(!this.state.foo)}>Update foo</button>
        <div>
          <hr/>
          <h1>Foo State: {this.state.foo + ''}</h1>
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
