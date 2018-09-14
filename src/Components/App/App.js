import React, { Component } from 'react';
import Header from '../Header/Header';
import CommentForm from '../../Containers/CommentForm/CommentForm';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <main className="app-container">
          <CommentForm />
        </main>
      </div>
    );
  }
}

export default App;