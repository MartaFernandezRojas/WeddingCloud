import { initialAsyncState as initial } from './async.state';

export function asyncReducer(state = initial, action) {
  switch (action.type) {
    case 'PRODUCT_SUCCESS':
      return {
        ...state,
        products: action.payload,
        productsError: null,
      };
    case 'PRODUCT_ERROR':
      return {
        ...state,
        products: [],
        productsError: action.payload,
      };
    default:
      return state;
  }
}
