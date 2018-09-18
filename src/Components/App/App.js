import React, { Component } from 'react';
import IdeaBox from '../../Containers/IdeaBox/IdeaBox';

import './App.css';

export class App extends Component {
  render() {
    return (
      <main className="app-container">
        <IdeaBox />
      </main>
    );
  }
}

export default App;