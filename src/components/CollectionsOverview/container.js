import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsFetching } from '../../redux/shop/selectors';
import WithSpinner from '../Spinner';
import CollectionsOverview from './index';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

// connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview)
// );

export default CollectionsOverviewContainer;
