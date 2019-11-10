import React from 'react';

import './Button.scss';

function Button({ children, isGoogleSignIn, isInverted, ...otherProps }) {
  return (
    <button
      className={`btn
        ${isGoogleSignIn && 'btn--google'}
        ${isInverted && 'btn--inverted'}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
