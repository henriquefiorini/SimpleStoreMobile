import { all, select, call, put, takeLatest } from 'redux-saga/effects';

import {
  ADD_TO_CART_REQUEST,
  UPDATE_CART_QUANTITY_REQUEST,
} from './actionTypes';
import { addToCartSuccess, updateQuantitySuccess } from './actions';

import { Api } from '../../../services';

function* addToCart({ id }) {
  const product = yield select(state => state.cart.find(p => p.id === id));
  const stock = yield call(Api.get, `/stock/${id}`);

  const stockQuantity = stock.data.quantity;
  const selectedQuantity = product ? product.quantity : 0;
  const quantity = selectedQuantity + 1;

  if (quantity > stockQuantity) {
    return;
  }

  if (product) {
    yield put(updateQuantitySuccess(id, quantity));
  } else {
    const { data } = yield call(Api.get, `/products/${id}`);
    const newProduct = {
      ...data,
      quantity: 1,
      priceFormatted: `$${data.price}`,
    };
    yield put(addToCartSuccess(newProduct));
  }
}

function* updateQuantity({ id, quantity }) {
  if (quantity <= 0) return;

  const stock = yield call(Api.get, `/stock/${id}`);
  const stockQuantity = stock.data.quantity;

  if (quantity > stockQuantity) {
    return;
  }

  yield put(updateQuantitySuccess(id, quantity));
}

export default all([
  takeLatest(ADD_TO_CART_REQUEST, addToCart),
  takeLatest(UPDATE_CART_QUANTITY_REQUEST, updateQuantity),
]);
