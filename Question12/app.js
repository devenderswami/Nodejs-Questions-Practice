// Problem: Express Rate Limiting

// Problem Statement: Implement a rate-limiting middleware for an Express application. The middleware should limit the 
// number of requests 
// from a single IP address to a specified rate, and return a 429 Too Many Requests status if the limit is exceeded.


// Expected Output:

// If the number of requests from a single IP is below the limit, allow the request to proceed.
// If the limit is exceeded, return a 429 Too Many Requests status.
// Test Cases:

// Send requests within the limit; all should proceed.
// Send requests exceeding the limit; some should return a 429 status.

const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});



app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// To test the rate-limiting middleware in your Express application, 
// you can use a tool like curl or Postman to send multiple requests from the same IP address 
// within a short time frame. Here's how you can do it using curl:

// Start your Express application by running node app.js (assuming your application file is named app.js).

// for i in {1..100}; do curl -i http://localhost:3000/; done


// Open a new terminal window and run the following curl command to send 100 requests to the root URL (/) of your application:


// This command uses a for loop to send 100 requests to the root URL of your application. Replace http://localhost:3000/ with the appropriate URL if your application is running on a different port or domain.

// After running the curl command, you should see a 429 Too Many Requests response from your Express application,
//  indicating that the rate limit has been exceeded.

// You can also test the rate-limiting middleware by sending requests from different IP addresses.
//  For example, you can use a VPN or proxy server to simulate requests from different IP addresses.

// To test the rate-limiting middleware with different rate limits, you can modify the max and windowMs options 
// in the limiter object in your Express application.
//  For example, you can set a lower max value (e.g., 10) and a shorter windowMs value (e.g., 10 seconds) 
//  to test a more aggressive rate limit.

// By testing your rate-limiting middleware with different scenarios, you can ensure that it works as 
// expected and provides the desired level of protection against abuse and denial-of-service attacks.








