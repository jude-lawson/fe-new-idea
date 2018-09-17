import React, { Component } from 'react';
import Header from '../../Containers/Header/Header';
import IdeaBox from '../../Containers/IdeaBox/IdeaBox';

import './App.css';

export class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <IdeaBox />
      </main>
    );
  }
}

export default App;