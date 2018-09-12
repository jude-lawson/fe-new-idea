import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeaBox from '../../Containers/IdeaBox/IdeaBox';
import CommentForm from '../../Containers/CommentForm/CommentForm';
import CommentBox from '../../Containers/CommentBox/CommentBox';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IdeaForm />
        <IdeaBox />
        <CommentForm />
        <CommentBox />
      </div>
    );
  }
}

export default App;