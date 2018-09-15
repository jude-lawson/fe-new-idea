import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseLogin, firebaseLogout } from '../../thunks/auth';

import './Header.css';
export class Header extends Component {
  createUser = () => {
    const { user } = this.props;
    console.log('user', user);
    const options = {
      method: 'POST',
      body: {...user}
    };
  }

  render() {
    const { authenticated, firebaseLogin, firebaseLogout } = this.props;
    if (authenticated) {
      this.createUser();
    }
    return (
      <header className="header--container">
        <h1 className="app--title">New Idea</h1>
        <div className="sign--up-container">
        </div>
        <div className="collapsible--menu">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu"></label>
          <div className="menu-content">
            <ul>
              <li><a href="#"></a>Notifications</li>
              <Link to="profile">Profile</Link>
              <li><a href="#"></a>Top Tech Talks</li>
              <li><a href="#"></a>New Article</li>
              {!authenticated ?
                <li onClick={() => firebaseLogin()}><a href="#"></a>Sign Up / Sign In</li> :
                <li onClick={() => firebaseLogout()}><a href="#"></a>Sign Out</li>
              }
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  firebaseLogin: PropTypes.func,
  firebaseLogout: PropTypes.func,
  authenticated: PropTypes.string
};

export const mapStateToProps = state => ({
  user: state.user,
  authenticated: state.user.id
});

export const mapDispatchToProps = dispatch => ({
  firebaseLogin: () => dispatch(firebaseLogin()),
  firebaseLogout: () => dispatch(firebaseLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);