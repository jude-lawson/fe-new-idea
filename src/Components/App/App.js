import React, { Component } from 'react';
import IdeaBox from '../../Containers/IdeaBox/IdeaBox';

import './App.css';

export class App extends Component {
  render() {
    return (
      <main className="app-container">
        <section className="app-copy">
          <h1 className="app-copy--title">Technical Ideas for the people</h1>
        </section>
        <IdeaBox />
      </main>
    );
  }
}

export default App;