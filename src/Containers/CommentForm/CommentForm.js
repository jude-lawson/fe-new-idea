import React, { Component } from 'react';
import  {connect } from 'react-redux';
import { addComment } from '../../actions/comment';
import PropTypes from 'prop-types';

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment({...this.state, id: Date.now()});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          className="comment--body-input"
          placeholder="Description"
          name="body"
          onChange={this.handleChange}
        />
        <button>SUBMIT</button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func
};

export const mapStateToProps = (state) => ({
  comments: state.comments
});

export const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);