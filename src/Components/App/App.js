import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { IdeaForm } from '../IdeaForm/IdeaForm';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IdeaForm />
      </div>
    );
  }
}

export default App;