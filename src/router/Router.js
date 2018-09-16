import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import App from '../Components/App/App';
import Profile from '../Containers/Profile/Profile';
import { PrivateRoute } from './PrivateRoute';

import ChatWidget from '../Containers/ChatWidget/ChatWidget';
export const history = createHistory();


export const AppRouter = ({ authenticated }) => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact component={App}/>
        <PrivateRoute authenticated={authenticated} path="/profile" exact  component={Profile} />
      </Switch>
      <ChatWidget />
    </div>
  </Router>
);

AppRouter.propTypes = {
  authenticated: PropTypes.string
};

export const mapStateToProps = state => ({
  authenticated: state.user.id || true
});

export default connect(mapStateToProps)(AppRouter);