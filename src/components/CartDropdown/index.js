import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/CartSelectors';

import Button from '../Button';
import CartItem from '../CartItem';

import './style.scss';

function CartDropdown({ cartItems }) {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
