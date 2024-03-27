// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import ExampleComponent from './ExampleComponent'; // Import your connected component

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Saga Example</h1>
        <ExampleComponent />
      </div>
    </Provider>
  );
};

export default App;
