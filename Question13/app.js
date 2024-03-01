// Problem: Express WebSocket Integration

// Problem Statement: Extend an existing Express application to include WebSocket support.
//  Create a WebSocket server that echoes back any message it receives from a client. 
//  Implement an endpoint "/websocket" that serves an HTML page with JavaScript to establish a WebSocket connection.

// Expected Output:

// Clients should be able to establish a WebSocket connection to "/websocket".
// Messages sent by clients should be echoed back by the server.
// Test Cases:

// Establish a WebSocket connection and send a message; it should be echoed back.


const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send('hi'); // Echo back the received message
  });
});

app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});








