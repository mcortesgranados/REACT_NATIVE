import './App.css'
import React, { useState } from 'react';
/*
se utiliza el estado para mantener los datos del formulario, 
los errores de validación y el estado de envío del formulario. 
Las funciones validateForm, handleSubmit y handleChange se encargan de
 validar el formulario, manejar el envío del formulario y actualizar los 
 datos del formulario respectivamente. Los comentarios explican cada parte 
 del código y su función en el manejo del formulario.
*/
const App = () => {
    // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
    // Estado para almacenar los errores de validación del formulario
  const [formErrors, setFormErrors] = useState({});
    // Estado para indicar si el formulario ha sido enviado
  const [formSubmitted, setFormSubmitted] = useState(false);

    // Función para validar el formulario
  const validateForm = () => {
    let errors = {};
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
        // Actualizar los errores de validación
    setFormErrors(errors);
    // Devolver true si no hay errores
    return Object.keys(errors).length === 0;
  };
// Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
      // Validar el formulario antes de enviar
    const isValid = validateForm();
    if (isValid) {
      // Enviar los datos del formulario
      setFormSubmitted(true);
    }
  };
// Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizar los datos del formulario
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Form Example</h2>
      {formSubmitted ? (
        <div>Form submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {formErrors.username && <div>{formErrors.username}</div>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <div>{formErrors.email}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && <div>{formErrors.password}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default App;
