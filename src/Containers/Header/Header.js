import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseLogin, firebaseLogout } from '../../thunks/auth';
import { retrieveMyIdeas } from '../../actions/userIdeas';

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
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      })
      .then(user => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        if (localUser.ideas.length !== this.props.myIdeas.length) {
          this.props.retrieveMyIdeas(user.ideas);
        }
      });
  }

  logOut = () => {
    localStorage.clear();
    this.props.firebaseLogout();
  }



  render() {
    const { authenticated, firebaseLogin } = this.props;
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
              <li className="menu-link">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-link">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="menu-link">
                <Link to="/ideaform">New Article</Link>
              </li>
              {!authenticated ?
                <li className="menu-link" onClick={() => firebaseLogin()}><a>Sign Up / Sign In</a></li> :
                <li className="menu-link" onClick={this.logOut}><a>Sign Out</a></li>
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
  authenticated: PropTypes.string,
  retrieveMyIdeas: PropTypes.func,
  myIdeas: PropTypes.array
};

export const mapStateToProps = state => ({
  user: state.user,
  authenticated: state.user.id,
  myIdeas: state.myIdeas
});

export const mapDispatchToProps = dispatch => ({
  firebaseLogin: () => dispatch(firebaseLogin()),
  firebaseLogout: () => dispatch(firebaseLogout()),
  retrieveMyIdeas: ideas => dispatch(retrieveMyIdeas(ideas))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);