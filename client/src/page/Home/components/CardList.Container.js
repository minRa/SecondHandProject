import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../../redux/item/item.selector';
import WithSpinnerr from '../../../components/with-spinner/with-spinner.component';
import CardList from'./CardList';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CardListContainer = compose(
  connect(mapStateToProps),
  WithSpinnerr 
)(CardList);

export default CardListContainer;