import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/UserSelectors';
import { selectCartHidden } from '../../redux/cart/CartSelectors';

import { auth } from '../../firebase/FirebaseUtils';
import CartDropdown from '../CartDropdown';
import CartIcon from '../CartIcon';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import * as S from './styled';

function Header({ currentUser, hidden }) {
  return (
    <S.HeaderContainer>
      <S.LogoContainer to='/'>
        <Logo className='logo' />
      </S.LogoContainer>
      <S.OptionsContainer>
        <S.OptionLink to='/shop'>
          SHOP
        </S.OptionLink>
        <S.OptionLink to='/contact'>
          CONTACT
        </S.OptionLink>
        {currentUser ? (
          <S.OptionDiv onClick={() => auth.signOut()}>
            SIGN OUT
          </S.OptionDiv>
        ) : (
            <S.OptionLink to='/signin' className='option'>
              SIGN IN
          </S.OptionLink>
          )}
        <CartIcon />
      </S.OptionsContainer>
      {!hidden && <CartDropdown />}
    </S.HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
