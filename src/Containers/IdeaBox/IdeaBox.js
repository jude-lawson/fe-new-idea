import React, { Component } from 'react';
import { IdeaCard } from '../IdeaCard/IdeaCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIdeas } from '../../api-calls/api-calls';

export class IdeaBox extends Component {
  

  async componentDidMount() {
    const allIdeas = await getIdeas();
    console.log(allIdeas)
  }

  displayIdeas = () => {
    if (this.props.ideas) {
      const displayedIdeas = this.props.ideas.map((idea, index) => {
        return <IdeaCard {...idea} key={index} />;
      });
      return displayedIdeas;
    }
  }

  render() {
    return (
      <main>
        {this.displayIdeas()}
      </main>
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