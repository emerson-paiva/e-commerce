import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/CartSelectors';
import { toggleCartHidden } from '../../redux/cart/CartActions';

import Button from '../Button';
import CartItem from '../CartItem';

import * as S from './styled';

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <S.CartDropdownContainer>
      <S.CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <S.EmptyCartMessage>Your cart is empty</S.EmptyCartMessage>
        )}
      </S.CartItems>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </S.CartDropdownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
