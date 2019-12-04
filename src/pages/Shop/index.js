import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/actions';
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/selectors';

import CollectionsOverview from '../../components/CollectionsOverview';
import WithSpinner from '../../components/Spinner';
import Collection from '../Collection';

import './Shop.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

function Shop({
  match,
  isCollectionFetching,
  isCollectionsLoaded,
  fetchCollectionsStartAsync,
}) {
  useEffect(() => {
    fetchCollectionsStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner
            isLoading={!isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        )}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
