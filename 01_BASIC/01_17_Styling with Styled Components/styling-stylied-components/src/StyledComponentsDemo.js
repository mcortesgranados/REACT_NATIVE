// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

import React from 'react';
import styled from 'styled-components';

// Define a styled component for a button
const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const StyledComponentsDemo = () => {
  return (
    <div>
      <h2>Styling with Styled Components</h2>
      <Button>Styled Button</Button>
    </div>
  );
};

export default StyledComponentsDemo;
