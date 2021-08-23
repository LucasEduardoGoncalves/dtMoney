import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from '../hooks/auth';

import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { Profile } from '../pages/Profile';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" component={SignIn} exact/>
          <Route path="/home" component={Dashboard}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </AuthContextProvider>     
    </BrowserRouter>
  );
}