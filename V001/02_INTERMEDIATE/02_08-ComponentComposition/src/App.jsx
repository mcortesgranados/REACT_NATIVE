import './App.css'
import React from 'react';

/*el componente Form utiliza los componentes Button e Input para construir
 un formulario simple. Button y Input son componentes reutilizables
  que pueden ser utilizados en otros lugares de la aplicación. 
  Esto permite utilizar la composición de componentes en 
  React para construir interfaces de usuario más complejas a partir de 
  componentes más simples y reutilizables.*/

// Componente funcional Button que acepta un prop onClick
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

// Componente funcional Input que acepta props de tipo, placeholder y value
const Input = ({ type, placeholder, value, onChange }) => (
  <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
);

// Componente funcional Form que utiliza los componentes Button e Input
const Form = () => {
  // Estado local para almacenar el valor del input
  const [inputValue, setInputValue] = React.useState('');

  // Función para manejar el cambio en el input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted with value: ' + inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

// Componente funcional App que utiliza el componente Form
const App = () => (
  <div>
    <h1>Component Composition Example</h1>
    <Form />
  </div>
);

export default App;
