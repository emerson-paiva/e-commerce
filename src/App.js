import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';

import { setCurrentUser } from './redux/user/UserActions';
import { selectCurrentUser } from './redux/user/UserSelectors';

import Header from './components/Header';

import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInSignUp from './pages/SignInSignUp';

import './App.css';

function App(props) {
  useEffect(() => {
    const { setCurrentUser } = props;

    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribeFromAuth();
  }, [props]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/checkout' exact component={Checkout} />
        <Route
          path='/signin'
          exact
          render={() =>
            props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
          }
        />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
