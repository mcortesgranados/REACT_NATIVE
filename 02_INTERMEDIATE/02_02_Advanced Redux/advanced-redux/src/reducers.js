// reducers.js
import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer'; // Example reducer

const rootReducer = combineReducers({
  example: exampleReducer,
  // Add more reducers as needed
});

export default rootReducer;
