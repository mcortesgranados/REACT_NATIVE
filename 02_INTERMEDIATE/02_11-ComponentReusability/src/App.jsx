import React from 'react';
import './App.css'
/**UserCard es un componente reutilizable que acepta props como name, age y 
 * city, y muestra esta información en un diseño consistente. 
 * Luego, en el componente ReusabilityExample, utilizamos UserCard dos veces 
 * con diferentes props para mostrar información de dos usuarios diferentes. 
 * Esto demuestra cómo puedes crear componentes reutilizables en React para
 *  mostrar información de manera consistente en diferentes partes de tu 
 * aplicación. Los comentarios explican cómo se utiliza el componente 
 * reutilizable en la aplicación. */


// Componente reutilizable UserCard que acepta props de nombre, edad y ciudad
const UserCard = ({ name, age, city }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

const ReusabilityExample = () => {
  return (
    <div>
      <h2>Component Reusability Example</h2>
      {/* Uso del componente UserCard con diferentes props */}
      <UserCard name="John Doe" age={30} city="New York" />
      <UserCard name="Jane Smith" age={25} city="Los Angeles" />
    </div>
  );
};

export default ReusabilityExample;