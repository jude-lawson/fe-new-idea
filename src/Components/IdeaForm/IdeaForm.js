import React, { Component } from 'react';
import  {connect } from 'react-redux';
import { addIdea } from '../../actions/idea';
import PropTypes from 'prop-types';
import { postIdea } from '../../api-calls/api-calls';
import Header from '../../Containers/Header/Header';

import './IdeaForm.css';

export class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.addIdea({...this.state, id: Date.now()});
    const user = JSON.parse(window.localStorage.getItem('user'));
    await postIdea(user.id, this.state.title, this.state.body);
    this.setState({title: '', body: ''});
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="idea--form-container">
        <Header />
        <form 
          onSubmit={this.handleSubmit}
          className="idea-form">
          <h1 className="idea--form-title">Create A New Idea</h1>
          <input 
            type="text"
            className="idea--title-input"
            placeholder="title"
            onChange={this.handleChange}
            name="title"
            value={title}
          />
          <textarea
            className="idea--body-input"
            placeholder="Description"
            name="body"
            onChange={this.handleChange}
            value={body}
          />
          <button className="idea--form-btn">SUBMIT</button>
        </form>
      </div>
    );
  }
}

IdeaForm.propTypes = {
  addIdea: PropTypes.func
};

export const mapStateToProps = (state) => ({
  ideas: state.ideas
});

export const mapDispatchToProps = (dispatch) => ({
  addIdea: (idea) => dispatch(addIdea(idea))
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaForm);