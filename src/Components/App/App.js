import React, { Component } from 'react';
import IdeaBox from '../../Containers/IdeaBox/IdeaBox';

import './App.css';

export class App extends Component {
  render() {
    return (
      <main className="app-container">
        <section className="app-copy">
          <h1>Some cool description goes here</h1>
        </section>
        <IdeaBox />
      </main>
    );
  }
}

export default App;