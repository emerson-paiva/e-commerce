import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem';

import { selectCollection } from '../../redux/shop/selectors';

import './styles.scss';

function Collection({ collection }) {
  return (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>

      <div className='items'>
        {collection.items.map(item => (
          <CollectionItem className='collection-item' item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
