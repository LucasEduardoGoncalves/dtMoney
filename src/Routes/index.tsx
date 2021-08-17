import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile}/>
        </Switch>
    </BrowserRouter>
  );
}