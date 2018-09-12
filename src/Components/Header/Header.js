import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseLogin } from '../../thunks/Auth';

export const Header = (props) => {
  return (
    <header className="header--container">
      <h1 className="app--title">New Idea</h1>
      <div className="sign--up-container">
        <h3 onClick={() => props.firebaseLogin()}>Sign Up</h3>
        <h3 onClick={() => props.firebaseLogin()}>Sign In</h3>
      </div>
      <div className="collapsible--menu">
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">Menu</label>
        <div className="menu-content">
          <ul>
            <li><a href="#"></a>Notifications</li>
            <li><a href="#"></a>Profile</li>
            <li><a href="#"></a>Top Tech Talks</li>
            <li><a href="#"></a>New Article</li>
            <li><a href="#"></a>My Articles</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  firebaseLogin: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  firebaseLogin: () => dispatch(firebaseLogin())
});

export default connect(null, mapDispatchToProps)(Header);