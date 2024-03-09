// Client.js
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
  console.log('Connected to server');
});

ws.on('message', function incoming(message) {
  console.log('Received: %s', message);
  // Update UI with received message
});

ws.on('close', function close() {
  console.log('Connection closed');
});
