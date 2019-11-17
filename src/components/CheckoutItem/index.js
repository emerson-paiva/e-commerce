import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from '../../redux/cart/CartActions';

import './style.scss';

function CheckoutItem({ cartItem, addItem, removeItem, clearItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <span className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <span className='price'>
        {quantity} x ${price}
      </span>
      <span className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
