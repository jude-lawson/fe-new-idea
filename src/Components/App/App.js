import React, { Component } from 'react';
import Header from '../Header/Header';
import IdeaForm from '../IdeaForm/IdeaForm';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <main className="app-container">
          <IdeaForm />
        </main>
        
      </div>
    );
  }
}

export default App;