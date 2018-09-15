import React, { Component } from 'react';
import Header from '../../Containers/Header/Header';
import CommentForm from '../../Containers/CommentForm/CommentForm';
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