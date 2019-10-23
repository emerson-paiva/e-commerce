import React, { useState } from 'react';

import FormInput from '../FormInput';
import Button from '../Button';

import { signInWithGoogle } from '../../firebase/FirebaseUtils';

import './SignIn.scss';

function SignIn() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handlerSubmit = event => {
    event.preventDefault();

    setLogin({
      email: '',
      password: '',
    });
  };

  const handlerChange = event => {
    const { value, name } = event.target;

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

        <Button type='submit'>Sign In</Button>
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
      </form>
    </div>
  );
}

export default SignIn;
