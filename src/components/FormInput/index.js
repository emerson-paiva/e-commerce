import React from 'react';

import './FormInput.scss';

function FormInput({ handlerChange, label, name, ...otherProps }) {
  return (
    <div className='group'>
      <input
        type='text'
        className='form-input'
        onChange={handlerChange}
        name={name}
        {...otherProps}
      />
      {label ? (
        <label
          htmlFor={name}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
