import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter with initial value of zero', () => {
  const { getByText } = render(<Counter />);
  const counterElement = getByText('Counter: 0');
  expect(counterElement).toBeInTheDocument();
});

test('increments counter value when increment button is clicked', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');
  const counterElement = getByText('Counter: 0');

  fireEvent.click(incrementButton);

  expect(counterElement).toHaveTextContent('Counter: 1');
});

test('decrements counter value when decrement button is clicked', () => {
  const { getByText } = render(<Counter />);
  const decrementButton = getByText('Decrement');
  const counterElement = getByText('Counter: 0');

  fireEvent.click(decrementButton);

  expect(counterElement).toHaveTextContent('Counter: -1');
});