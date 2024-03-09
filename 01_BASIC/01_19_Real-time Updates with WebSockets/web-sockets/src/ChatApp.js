// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

import React, { useState, useEffect } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:8080'); // Adjust URL as needed
    setWs(webSocket);

    webSocket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    webSocket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    return () => {
      webSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === '') return;
    const messageObject = { text: message };
    ws.send(JSON.stringify(messageObject));
    setMessage('');
  };

  return (
    <div>
      <h2>Chat Application</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatApp;
