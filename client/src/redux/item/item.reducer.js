import ItemActionTypes from './item.types';


const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const ItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ItemActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ItemActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default ItemReducer;
