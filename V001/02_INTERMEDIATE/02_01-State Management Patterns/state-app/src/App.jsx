import { useState } from 'react'
import './App.css'

/**
 * Componente funcional que muestra un formulario para ingresar nombres y correos electrónicos.
 * Los nombres y correos electrónicos ingresados se muestran en una lista debajo del formulario.
 */
function App() {
    // Estado para almacenar el nombre ingresado en el formulario
  const [name, setName] = useState('');
    // Estado para almacenar el correo electrónico ingresado en el formulario
  const [email, setEmail] = useState('');
    // Estado para almacenar la lista de contactos ingresados
  const [contacts, setContacts] = useState([]);

    // Manejador de cambio para el campo de nombre
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Manejador de cambio para el campo de correo electrónico
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Manejador de envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Crear un nuevo contacto con el nombre y el correo electrónico ingresados
    const newContact = { name, email };
    // Agregar el nuevo contacto a la lista de contactos utilizando el operador spread
    setContacts([...contacts, newContact]);
    // Limpiar los campos de nombre y correo electrónico
    setName('');
    setEmail('');
  };

  return (
    <div>
<form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.name} - {contact.email}</li>
        ))}
      </ul>
    </div>
    

  );
}

export default App;