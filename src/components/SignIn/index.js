import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../FormInput';
import Button from '../Button';

import {auth} from '../../firebase/FirebaseUtils';

import {googleSignInStart} from '../../redux/user/UserActions';

import './SignIn.scss';

function SignIn({googleSignInStart}) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handlerSubmit = async (event) => {
    event.preventDefault();

    const {email, password} = login;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }

    setLogin({
      email: '',
      password: '',
    });
  };

  const handlerChange = (event) => {
    const {value, name} = event.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span className='subtitle'>Sign in with your email and password</span>

      <form onSubmit={handlerSubmit}>
        <FormInput
          type='email'
          name='email'
          value={login.email}
          handlerChange={handlerChange}
          label='email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={login.password}
          handlerChange={handlerChange}
          label='password'
          required
        />

        <div className='buttons'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={googleSignInStart} isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
