import React, { Component } from 'react';
import Header from '../Header/Header';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <main className="app-container"></main>
      </div>
    );
  }
}

export default App;