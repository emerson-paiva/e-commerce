import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/actions';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/FirebaseUtils';

import CollectionsOverview from '../../components/CollectionsOverview';
import Collection from '../Collection';

import './Shop.scss';

function Shop({ match, updateCollections }) {
  // unsubscribeFromSnapshop = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
