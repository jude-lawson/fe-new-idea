import React, { Component } from 'react';
import  {connect } from 'react-redux';
import { addComment } from '../../actions/comment';
import PropTypes from 'prop-types';
import './CommentForm.css';

export class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      body: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment({...this.state, id: Date.now()});
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="comment-form"
      >
        <h1 className="comment--form-header">Comment on the Idea</h1>
        <textarea
          className="comment--body-input"
          placeholder="Description"
          name="body"
          onChange={this.handleChange}
        />
        <button className="comment--form-btn">SUBMIT</button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func
};

export const mapStateToProps = state => ({
  comments: state.comments
});

export const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);