import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { ArticleForm } from '../ArticleForm/ArticleForm';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleForm />
      </div>
    );
  }
}

export default App;