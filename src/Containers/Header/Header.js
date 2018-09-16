import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseLogin, firebaseLogout } from '../../thunks/auth';

import './Header.css';
export class Header extends Component {
  createUser = async () => {
    const { user } = this.props;
    const newUser = {
      uid: user.id,
      email: user.email,
      username: user.name
    };
    const url = 'https://whispering-lowlands-31319.herokuapp.com/api/v1/users';
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    };
    await fetch(url, options)
      .then(res => res.json())
      .then(user => localStorage.setItem('user', JSON.stringify(user)));
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
              <Link to="ideaform">New Article</Link>
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