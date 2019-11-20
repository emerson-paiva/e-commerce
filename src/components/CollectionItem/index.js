import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';

import { addItem } from '../../redux/cart/CartActions';

import './CollectionItem.scss';

function CollectionItem({ item, addItem }) {
  const { imageUrl, name, price } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button className='btn' isInverted onClick={() => addItem(item)}>
        Add to cart
      </Button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
