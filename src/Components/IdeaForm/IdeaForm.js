import React, { Component } from 'react';
import  {connect } from 'react-redux';
import { addIdea } from '../../actions/idea';
import PropTypes from 'prop-types';

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
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addIdea({...this.state, id: Date.now()});
    this.setState({title: '', body: ''});
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          className="article--title-input"
          placeholder="title"
          onChange={this.handleChange}
          name="title"
          value={title}
        />
        <textarea
          className="article--body-input"
          placeholder="Description"
          name="body"
          onChange={this.handleChange}
          value={body}
        />
        <button>SUBMIT</button>
      </form>
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