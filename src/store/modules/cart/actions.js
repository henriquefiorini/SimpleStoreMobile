import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_QUANTITY_REQUEST,
  UPDATE_CART_QUANTITY_SUCCESS,
  REMOVE_FROM_CART,
} from './actionTypes';

export function addToCartRequest(id) {
  return {
    type: ADD_TO_CART_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: ADD_TO_CART_SUCCESS,
    product,
  };
}

export function updateQuantityRequest(id, quantity) {
  return {
    type: UPDATE_CART_QUANTITY_REQUEST,
    id,
    quantity,
  };
}

export function updateQuantitySuccess(id, quantity) {
  return {
    type: UPDATE_CART_QUANTITY_SUCCESS,
    id,
    quantity,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
}
