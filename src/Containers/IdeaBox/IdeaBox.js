import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IdeaCard } from '../IdeaCard/IdeaCard';
import { getAllIdeas } from '../../thunks/getAllIdeas';

import './IdeaBox.css'

export class IdeaBox extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }

  componentDidMount = async () => {
    await this.props.getAllIdeas();
    this.setState({ ideas: this.props.ideas });
  }

  render() {
    const { ideas } = this.state;
    return (
      <section className="app-container">
        <IdeaCard ideas={ideas} />
      </section>
    );
  }
}

IdeaBox.propTypes = {
  ideas: PropTypes.array,
  getAllIdeas: PropTypes.func
};

export const mapStateToProps = state => ({
  ideas: state.allIdeas
});

export const mapDispatchToProps = dispatch => ({
  getAllIdeas: () => dispatch(getAllIdeas())
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaBox);