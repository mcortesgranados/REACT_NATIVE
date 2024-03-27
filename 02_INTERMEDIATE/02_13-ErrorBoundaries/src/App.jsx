import './App.css'
import React, { Component } from 'react';
/*
En este ejemplo, creamos un componente ErrorBoundary que actúa como un 
contenedor para los componentes que podrían lanzar errores. Utilizamos 
el método getDerivedStateFromError para capturar cualquier error lanzado 
por los componentes hijos. Si se produce un error, el estado hasError se 
establece en true y se muestra el componente ErrorMessage en lugar del 
componente hijo que causó el error. De lo contrario, el componente hijo se 
renderiza normalmente. Esto ayuda a prevenir que toda la aplicación se bloquee 
debido a un error en un componente específico.
*/


// Componente que puede lanzar un error
const ErrorComponent = () => {
  throw new Error('Error occurred!');
};

// Componente que muestra un mensaje de error genérico
const ErrorMessage = () => (
  <div>
    <h2>Something went wrong.</h2>
    <p>Please try again later.</p>
  </div>
);

// Error Boundary para capturar errores en componentes hijos
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Método de ciclo de vida que maneja errores
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

// Componente principal que utiliza el Error Boundary
const ErrorBoundaryExample = () => (
  <ErrorBoundary>
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorComponent />
    </div>
  </ErrorBoundary>
);

export default ErrorBoundaryExample;