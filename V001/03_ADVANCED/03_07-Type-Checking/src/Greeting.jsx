import './App.css'
import PropTypes from 'prop-types';

const Greeting = ({ name = 'John Doe', age = 30 }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Greeting;