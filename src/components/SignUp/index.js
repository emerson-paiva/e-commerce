import React, { useState } from 'react';

import Button from '../Button';
import FormInput from '../FormInput';

import { auth, createUserProfileDocument } from '../../firebase/FirebaseUtils';

import './SignUp.scss';

function SignUp() {
  const [signUp, setSignUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handlerSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = signUp;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setSignUp({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handlerChange = event => {
    const { name, value } = event.target;

    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I don't have a account</h2>
      <span className='subtitle'>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handlerSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={signUp.displayName}
          handlerChange={handlerChange}
          label='Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={signUp.email}
          handlerChange={handlerChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={signUp.password}
          handlerChange={handlerChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={signUp.confirmPassword}
          handlerChange={handlerChange}
          label='Confirm Password'
          required
        />

        <div className='buttons'>
          <Button type='submit'>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
