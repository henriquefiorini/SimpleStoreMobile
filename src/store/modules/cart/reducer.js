import produce from 'immer';

import {
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_QUANTITY_SUCCESS,
  REMOVE_FROM_CART,
} from './actionTypes';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS: {
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    }

    case UPDATE_CART_QUANTITY_SUCCESS: {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].quantity = Number(action.quantity);
        }
      });
    }

    case REMOVE_FROM_CART: {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    }

    default: {
      return state;
    }
  }
}
