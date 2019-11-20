import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/actions';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/FirebaseUtils';

import CollectionsOverview from '../../components/CollectionsOverview';
import WithSpinner from '../../components/Spinner';
import Collection from '../Collection';

import './Shop.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

function Shop({ match, updateCollections }) {
  // unsubscribeFromSnapshop = null;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
