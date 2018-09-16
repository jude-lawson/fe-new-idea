import React, { Component } from 'react';
import { IdeaCard } from '../IdeaCard/IdeaCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIdeas } from '../../api-calls/api-calls';
import Header from '../Header/Header';

export class IdeaBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allIdeas: []
    };
  }

  async componentDidMount() {
    const allIdeas = await getIdeas();
    this.displayIdeas(allIdeas);
    this.setState({allIdeas});
  }

  displayIdeas = () => {
    if (this.state.allIdeas) {
      const displayedIdeas = this.state.allIdeas.map((idea, index) => {
        return <IdeaCard {...idea} key={index} />;
      });
      return displayedIdeas;
    }
  }

  render() {
    return (
      <section className="app-container">
        <main>
          {this.displayIdeas(this.state.allIdeas)}
        </main>
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