// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart App</h1>
        <ShoppingCart />
      </div>
    </Provider>
  );
};

export default App;
