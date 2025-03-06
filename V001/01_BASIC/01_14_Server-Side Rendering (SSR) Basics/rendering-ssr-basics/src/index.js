// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

// This file sets up a basic Express server for server-side rendering (SSR) of a React application.

// Import necessary modules
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App'; // Import the main React component

// Create an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
  // Render the React component to a string
  const appString = ReactDOMServer.renderToString(<App />);
  
  // Send the rendered HTML to the client
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Server-Side Rendering</title>
    </head>
    <body>
      <div id="root">${appString}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `);
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
