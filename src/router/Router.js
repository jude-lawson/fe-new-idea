import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import App from '../Components/App/App';
import Profile from '../Containers/Profile/Profile';
import { PrivateRoute } from './PrivateRoute';
import IdeaForm from '../Components/IdeaForm/IdeaForm';
import { IdeaCard } from '../Containers/IdeaCard/IdeaCard';

export const history = createHistory();

export const AppRouter = ({ authenticated, props }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/idea/:id" exact render={({ match }) => {
        const idea = props.ideas.find(idea => idea.id === match.params.id);
        return (
          <IdeaCard {...idea}/>
        );
      }} />
      <PrivateRoute authenticated={authenticated} path="/ideaform" exact component={IdeaForm} />
      <PrivateRoute authenticated={authenticated} path="/profile" exact  component={Profile} />
    </Switch>
  </Router>
);

AppRouter.propTypes = {
  authenticated: PropTypes.string
};

export const mapStateToProps = state => console.log(state) || ({
  authenticated: state.user.id || true,
  ideas: state.ideas || []
});

export default connect(mapStateToProps)(AppRouter);