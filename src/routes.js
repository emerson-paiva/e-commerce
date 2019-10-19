import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInSignUp from './pages/SignInSignUp';
import Header from './components/Header';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/signin' exact component={SignInSignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
