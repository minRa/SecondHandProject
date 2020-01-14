import { all, call } from 'redux-saga/effects';

import { itemSagas } from './item/item.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([call(itemSagas) , call(userSagas), call(cartSagas)]);
}
