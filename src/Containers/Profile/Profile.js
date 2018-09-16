import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { Main } from '../Main/Main';

import './Profile.css';

export class Profile extends Component {

  render() {
    const { user } = this.props;
    const userCardStyles = {
      background: `no-repeat url(${user.image}) center center`,
      height: '50vh'
    };

    return (
      <div>
        <Header />
        <section className="app-container">
          {user.id &&
            <div className="profile-card" style={userCardStyles}>
              <div className="profile-card__user">
                <h2>{user.name}</h2>
              </div>
            </div>
          }
        </section>
        <Main />
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
