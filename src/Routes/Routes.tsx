import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/profile" component={Profile}/>
        </Switch>
    </BrowserRouter>
  );
}