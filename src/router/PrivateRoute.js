import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ authenticated, component: Component, ...rest }) => console.log(rest)||(
  <Route {...rest} render={props => (
    authenticated ?
      (
        <Component {...props} />
      ) :
      (
        <Redirect to="/" />
      )
  )} />
);