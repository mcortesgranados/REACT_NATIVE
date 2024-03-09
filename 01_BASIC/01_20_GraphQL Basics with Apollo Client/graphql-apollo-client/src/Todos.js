// Todos.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_TODOS = gql`
  query {
    todos {
      id
      text
      completed
    }
  }
`;

const Todos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} />
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Todos;