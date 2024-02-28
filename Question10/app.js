// 11. Problem: Express Authentication Middleware
// Implement an authentication middleware for an Express application. The middleware should check for the presence of a valid 
// JWT (JSON Web Token) in the request headers. If a valid token is present, allow the request to proceed; otherwise,
//  return a 401 Unauthorized status.


// Expected Output:

// If a valid JWT is present, allow the request to proceed.
// If no JWT is present or it's invalid, return a 401 Unauthorized status.
// Test Cases:

// Request with a valid JWT should proceed.
// Request without a JWT or with an invalid JWT should return a 401 Unauthorized status.


const express = require('express');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authmiddleware');



const app = express();

const secretKey = "2b2e9a9d1f6b4c7a8d0f3e5c8b1e2a4f";

// Generate a JWT token for testing purposes
app.get('/generate-token', (req, res) => {
  const user = { id: 1, username: 'john.doe' };
  const token = jwt.sign(user, secretKey);
  res.json({ token });
});

// Protected route that requires authentication
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route' });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// for testing curl -X GET http://localhost:3000/generate-token

//Copy the JWT token from the response and use it to make a GET request to the /protected route, 
//which is the route that requires authentication. Replace YOUR_TOKEN with the JWT token you copied.

//curl -X GET http://localhost:3000/protected -H "Authorization: Bearer YOUR_TOKEN"

//If the token is valid, you should receive a response with a status 
//code of 200 and a JSON object containing the message "Protected route". For example:

//{"message":"Protected route"}

//If you try to access the /protected route without providing a valid JWT token, you should receive a
// response with a status code of 401 (Unauthorized)
// or 403 (Forbidden), depending on how you have implemented the authentication middleware.

//curl -X GET http://localhost:3000/protected





