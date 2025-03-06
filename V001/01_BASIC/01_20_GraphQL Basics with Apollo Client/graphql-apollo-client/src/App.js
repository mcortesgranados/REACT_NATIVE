// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

// App.js
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Todos from './Todos';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Todo List</h1>
        <Todos />
      </div>
    </ApolloProvider>
  );
};

export default App;
