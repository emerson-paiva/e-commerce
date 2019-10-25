import React from 'react';

import './Button.scss';

function Button({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`btn ${isGoogleSignIn ? 'btn--google' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
