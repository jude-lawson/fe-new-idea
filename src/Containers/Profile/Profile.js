import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
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
    const user = JSON.parse(localStorage.getItem('user'))
    const ideas = user.ideas;
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
        <Header />
        <section className="profile-container">
          {user.id &&
          <div className="profile-card" style={userCardStyles}>
            <div className="profile-card__user">
              <h2>{user.name}</h2>
              <a href={user.github} target="_blank" className="github-link">GitHub</a>
            </div>
            <div className="ideas-container">
              <h1 className="profile--ideas-header">{user.githubHandle} Ideas</h1>
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
  user: PropTypes.object
};

export const mapStateToProps = state => ({
  user: state.user,
  ideas: state.ideas
});

export default connect(mapStateToProps)(Profile);
