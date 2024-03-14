// Problem: Express Logging Middleware
// Problem Statement: Create a logging middleware for an Express application. 
// The middleware should log detailed information about each incoming request, including the timestamp, HTTP method, URL, 
// request headers, and request body.

// Function Signature:
// /**
//  * Logging middleware for Express
//  * @param {Object} req - Express request object
//  * @param {Object} res - Express response object
//  * @param {Function} next - Express next function
//  */
// function loggingMiddleware(req, res, next) {
//     // Your implementation here
//   }


// Expected Output:

// Each incoming request should be logged with detailed information.
// Test Cases:

// Make multiple requests and check the server logs for detailed information.
// Hint To create a logging middleware for Express, you'll need to define a function that takes req, res, and next as parameters. 
// Inside this function, use console.log to print the timestamp,
// HTTP method, URL, headers, and body of the incoming request. Finally, call next() to pass control to the next middleware.


const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Create a write stream (in append mode) for the log file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Custom token for request body logging
morgan.token('req-body', function (req) {
  return JSON.stringify(req.body);
});

// Use morgan combined format along with our custom token
app.use(morgan(':date[iso] :method :url :status :res[content-length] - :response-time ms :req-body', { stream: accessLogStream }));

// Middleware to parse request bodies as JSON
app.use(express.json());

// Example route
app.post('/example', (req, res) => {
  res.send('Example route');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// for testing curl -X POST -H "Content-Type: application/json" -d '{"key": "value"}' http://localhost:3000/example







