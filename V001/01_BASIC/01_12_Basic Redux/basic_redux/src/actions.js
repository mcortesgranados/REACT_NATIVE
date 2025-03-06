// actions.js
// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024
export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
