// Importar estilos y funciones de React
import './App.css'
import { useState, useEffect } from 'react';

// Definir componente funcional Greeting
const Greeting = () => {
  // Estado para almacenar la lista de gifs
  const [gifs, setGifs] = useState(null);

  // Efecto para obtener datos del servidor cuando el componente se monta
  useEffect(() => {
    // Función asincrónica para obtener los gifs
    const fetchData = async () => {
      try {
        // Clave de API de Giphy
        const apiKey = 'AGVk5d7JiGYnHCH4fN5rlbaylRk5wO5A';
        // URL de la API de Giphy para buscar gifs de 'lol'
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=lol&limit=15`;
        // Obtener datos de la API
        const resp = await fetch(url);
        // Verificar si la respuesta es correcta
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        // Convertir la respuesta a formato JSON
        const { data }= await resp.json();
        // Mapear los gifs obtenidos para obtener solo la información necesaria
        const mappedGifs = data.map(({ id, title, images }) => ({
          id: id,
          title: title,
          url: images.downsized_medium.url
        }))
        // Actualizar el estado con la lista de gifs mapeados
        setGifs(mappedGifs);
      } catch (error) {
        // Manejar errores de obtención de datos
        console.error('Error fetching data:', error);
      }
    };

    // Llamar a la función para obtener los datos
    fetchData();
  }, []); // El segundo argumento vacío indica que el efecto se ejecuta solo una vez al montar el componente

  // Renderizar el componente
  return (
    <div>
      <h1>Server Data Fetching Example</h1>
      {gifs ? ( // Verificar si se han obtenido los gifs
        <ul>
          {gifs.map(gif => ( // Mapear los gifs para mostrar cada uno en una lista
            <li key={gif.id}>
              <img src={gif.url} alt={gif.title} /> {/* Mostrar la imagen del gif con su título como texto alternativo */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> // Mostrar un mensaje de carga mientras se obtienen los datos
      )}
    </div>
  );
};

// Exportar el componente Greeting
export default Greeting;