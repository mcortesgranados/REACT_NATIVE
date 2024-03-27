import { createStore } from 'redux';
import './App.css'
// Reducer inicial
const initialState = {
  count: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Crear la store
const store = createStore(reducer);

export default store;