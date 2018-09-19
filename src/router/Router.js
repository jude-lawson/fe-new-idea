import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import App from '../Components/App/App';
import Profile from '../Containers/Profile/Profile';
import { PrivateRoute } from './PrivateRoute';
import IdeaForm from '../Components/IdeaForm/IdeaForm';
import Idea from '../Containers/Idea/Idea';
import Login from '../Containers/Login/Login';
import Header from '../Containers/Header/Header';

export const history = createHistory();

export const AppRouter = ({ authenticated }) => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/idea/:id" exact render={() => {
          return (
            <Idea />
          );
        }} />
        <PrivateRoute authenticated={authenticated} path="/ideaform" exact component={IdeaForm} />
        <PrivateRoute authenticated={authenticated} path="/profile"  exact component={Profile} />
      </Switch>
    </div>
  </Router>
);

AppRouter.propTypes = {
  authenticated: PropTypes.string,
  allIdeas: PropTypes.array
};

export const mapStateToProps = state => ({
  authenticated: state.user.id
});

export default connect(mapStateToProps)(AppRouter);