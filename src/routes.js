import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInSignUp from './pages/SignInSignUp';
import Header from './components/Header';
import { auth } from './firebase/FirebaseUtils';

function Routes() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      setCurrentUser(user)
    );

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/signin' exact component={SignInSignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
