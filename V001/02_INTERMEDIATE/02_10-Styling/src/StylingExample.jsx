import './App.css' // Importamos el archivo de estilos CSS
import React from 'react';
/**En este ejemplo, hemos creado un componente StylingExample que muestra 
 * cómo aplicar estilos en línea a elementos JSX y cómo utilizar clases de 
 * CSS para aplicar estilos externos. También se muestra cómo usar estilos 
 * en línea para elementos específicos, como un botón. El archivo App.css
 *  contiene las reglas de estilo CSS que se aplican al componente.
 *  Los comentarios explican cada parte del código y cómo se aplican los 
 * estilos. */

const StylingExample = () => {
  // Estilo en línea para el título
  const titleStyle = {
    color: 'blue',
    fontSize: '24px',
    marginBottom: '20px',
  };

  return (
    <div>
      {/* Aplicamos el estilo en línea al título */}
      <h2 style={titleStyle}>Styling Example</h2>
      {/* Utilizamos una clase de CSS para aplicar estilos */}
      <p className="paragraph">This is a paragraph with custom styles.</p>
      {/* Utilizamos estilos en línea para un botón */}
      <button style={{ backgroundColor: 'green', color: 'white' }}>Click me</button>
    </div>
  );
};

export default StylingExample;
