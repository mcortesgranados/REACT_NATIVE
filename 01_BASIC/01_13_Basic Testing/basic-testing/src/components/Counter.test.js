// components/Counter.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter component with initial count of 0', () => {
  const { getByText } = render(<Counter />);
  const countElement = getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  const { getByText } = render(<Counter />);
  const button = getByText(/Increment/i);
  fireEvent.click(button);
  const countElement = getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
});
