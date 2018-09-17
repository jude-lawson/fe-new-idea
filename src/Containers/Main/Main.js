import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Ideabox from '../IdeaBox/IdeaBox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from '../Profile/Profile';

export const Main = (props) => {
  return (
    <Switch>
      <Route  
        exact path="/"
        component={Ideabox}
      />
      <Route 
        exact path="/profile"
        component={Profile}
      />
    </Switch>
  );
};

