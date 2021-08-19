import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Dashboard} exact/>
        </Switch>
    </BrowserRouter>
  );
}