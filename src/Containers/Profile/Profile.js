import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IdeaCard } from '../IdeaCard/IdeaCard';
import './Profile.css';

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }

  async componentDidMount() {
    const ideas = this.props.ideas.concat(this.props.myIdeas.reverse());
    this.setState({ideas});
  }

  render() {
    const { user } = this.props;
    const userCardStyles = {
      background: `no-repeat url(${user.image}) center center`,
      height: '60vh'
    };

    return (
      <div className="app-container">
        <section className="profile-container">
          {user.id &&
          <div className="profile-card" style={userCardStyles}>
            <div className="profile-card__user">
              <h2>{user.name}</h2>
              <a href={user.github} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
            </div>
            <div className="ideas-container">
              <h2 className="profile--ideas-header">{user.githubHandle}: Ideas</h2>
              <IdeaCard className="profile-ideas" ideas={this.state.ideas} />
            </div>
          </div>
          }
        </section>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
  ideas: PropTypes.array,
  myIdeas: PropTypes.array
};

export const mapStateToProps = state => ({
  user: state.user,
  ideas: state.ideas,
  myIdeas: state.myIdeas
});

export default connect(mapStateToProps)(Profile);
