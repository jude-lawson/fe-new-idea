import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseLogin } from '../../thunks/auth';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  firebaseLogin: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  firebaseLogin: () => dispatch(firebaseLogin())
});

export default connect(null, mapDispatchToProps)(App);