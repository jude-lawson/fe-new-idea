import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../Containers/Header/Header';
import { firebaseLogin } from '../../thunks/auth';

import './Login.css';

export const Login = ({ firebaseLogin }) => {
  return (
    <main className="app-container">
      <Header />
      <section className="login-container">
        <h2 className="login-container--title">Oops Looks Like you need to Login</h2>
        <button className="btn-grad" onClick={() => firebaseLogin()}>Login</button>
      </section>
    </main>
  );
};

Login.propTypes = {
  firebaseLogin: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  firebaseLogin: () => dispatch(firebaseLogin())
});

export default connect(null, mapDispatchToProps)(Login);
