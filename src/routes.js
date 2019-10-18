import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Header from './components/Header';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
