import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeaBox from '../../Containers/IdeaBox/IdeaBox';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IdeaForm />
        <IdeaBox />
      </div>
    );
  }
}

export default App;