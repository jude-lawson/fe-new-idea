import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';

export const AppRouter = () => (
  <Router >
    <Switch>
      <Route path="/" exact />
    </Switch>
  </Router>
);