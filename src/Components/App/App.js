import React, { Component } from 'react';
import Header from '../../Containers/Header/Header';
import { Main } from '../../Containers/Main/Main';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;