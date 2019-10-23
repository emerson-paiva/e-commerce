import React from 'react';

import './FormInput.scss';

function FormInput({ handlerChange, label, ...otherProps }) {
  return (
    <div className='group'>
      <input type='text' className='form-input' onChange={handlerChange} />
      {label ? (
        <label
          htmlFor=''
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
