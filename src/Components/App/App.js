import React, { Component } from 'react';
import './App.css';
import {Header} from '../Header/Header';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;