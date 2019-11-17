import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/selectors';

import CollectionPreview from '../CollectionPreview';

import './styles.scss';

function CollectionsOverview({ collections }) {
  return (
    <div className='collections-overview'>
      {collections.map(collection => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
