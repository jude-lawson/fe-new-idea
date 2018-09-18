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

export const history = createHistory();

export const AppRouter = ({ authenticated }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/idea/:id" exact render={() => {
        return (
          <Idea />
        );
      }} />
      <PrivateRoute authenticated={authenticated} path="/ideaform" exact component={IdeaForm} />
      <PrivateRoute authenticated={authenticated} path="/profile" exact  component={Profile} />
    </Switch>
  </Router>
);

AppRouter.propTypes = {
  authenticated: PropTypes.string,
  allIdeas: PropTypes.array
};

export const mapStateToProps = state => ({
  authenticated: state.user.id || true
});

export default connect(mapStateToProps)(AppRouter);