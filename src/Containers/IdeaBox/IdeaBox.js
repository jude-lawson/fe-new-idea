import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IdeaCard } from '../IdeaCard/IdeaCard';

import { getIdeas } from '../../api-calls/api-calls';

export class IdeaBox extends Component {
  constructor() {
    super();
    this.state = {
      allIdeas: []
    };
  }

  async componentDidMount() {
    const allIdeas = await getIdeas();
    this.setState({ allIdeas });
  }

  displayIdeas = () => {
    return this.state.allIdeas.map(idea =>
      <Link to={`/ideas/${idea.id}`} key={idea.id} >
        <IdeaCard {...idea} key={idea.id}/>
      </Link>
    );
  }

  render() {
    return (
      <section className="app-container">
        {this.displayIdeas()}
      </section>
    );
  }
}

IdeaBox.propTypes = {
  ideas: PropTypes.array
};

export const mapStateToProps = (state) => ({
  ideas: state.ideas
});

export default connect(mapStateToProps)(IdeaBox);