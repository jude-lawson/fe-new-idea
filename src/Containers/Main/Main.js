import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Ideabox from '../IdeaBox/IdeaBox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Main = (props) => {
  return (
    <Switch>
      <Route  
        exact path="/"
        component={Ideabox}
      />
    </Switch>
  );
};

