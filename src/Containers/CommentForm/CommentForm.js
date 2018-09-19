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
    this.props.addComment({ ...this.state });
  }

  render() {
    const { hidden } = this.props;

    return (
      <div className={`comment--form-container ${hidden? 'hidden' : 'not-hidden'}`}>
        <form
          onSubmit={this.handleSubmit}
          className="comment-form"
        >
          <h1 className="comment--form-header">Contribute to the Idea</h1>
          <textarea
            className="comment--body-input"
            placeholder="Description"
            name="body"
            required
            onChange={this.handleChange}
          />
          <button className="comment--form-btn btn-grad" id="blue-btn">SUBMIT</button>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func,
  hidden: PropTypes.bool
};

export const mapStateToProps = state => ({
  comments: state.comments
});

export const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);