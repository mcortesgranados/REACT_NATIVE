// reducers.js
// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024
import { ADD_TO_CART } from './actions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
