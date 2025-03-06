import React, { Component } from 'react';
import './App.css' // Importamos un archivo de estilos

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };// Inicializamos el estado del componente
    console.log('Constructor'); // Se muestra en la consola al inicializar el componente
  }

  componentDidMount() {
    console.log('Component Did Mount');  // Se ejecuta después de que el componente se monta en el DOM
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update', prevProps, prevState); // Se ejecuta después de que el componente se actualiza
  }

  componentWillUnmount() {
    console.log('Component Will Unmount'); // Se ejecuta antes de que el componente se desmonte y se elimine
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 }); // Manejador de clics para incrementar el contador
  };

  render() {
    console.log('Render'); // Se ejecuta cada vez que el componente se renderiza
    return (
      <div>
        <h2>Lifecycle Example</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleExample;