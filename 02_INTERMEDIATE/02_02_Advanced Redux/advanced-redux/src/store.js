// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Your root reducer
import rootSaga from './sagas'; // Your root saga

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux Store with Middleware
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Run Sagas
sagaMiddleware.run(rootSaga);

export default store;
