// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

import React, { useState } from 'react';

// Define interface for component props
interface GreetingProps {
  name: string;
  age: number;
}

// Define functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h2>Greeting</h2>
      <p>Hello, {name}! You are {age} years old.</p>
    </div>
  );
};

// Define another component with typed props
interface CounterProps {
  initialValue: number;
}

// Define functional component with typed props and state
const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  // Define state with type annotation
  const [count, setCount] = useState<number>(initialValue);

  // Define typed function for handling increment
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

// Main component
const MyAppComponent: React.FC = () => {
  return (
    <div>
      {/* Render Greeting component with typed props */}
      <Greeting name="Alice" age={30} />
      {/* Render Counter component with typed props and state */}
      <Counter initialValue={0} />
    </div>
  );
};

export default MyAppComponent;
