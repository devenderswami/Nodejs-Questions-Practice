// Problem Statement: Implement a caching middleware for an Express application. The middleware should cache responses 
// based on the request URL and return cached responses for subsequent identical requests. Allow cache expiration after 
// a specified time.



// Expected Output:

// Cached responses should be returned for identical requests within the cache expiration time.
// Subsequent requests after cache expiration should trigger a new response.
// Test Cases:

// Make a request, cache the response, and make the same request again within the cache expiration time.
// Make a request, cache the response, wait for cache expiration, and make the same request again.


const express = require('express');
const app = express();
const port = 3000;

// In-memory cache object
const cache = {};

// Middleware function to cache responses
function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;
    if (cache[key]) {
        const cachedResponse = cache[key];
        // Check if cached response has expired
        if (Date.now() - cachedResponse.timestamp < cachedResponse.expiresIn) {
            console.log('Cache hit:', key);
            return res.send(cachedResponse.data);
        } else {
            // Remove expired cache
            delete cache[key];
        }
    }
    // Define a method to set cache data
    res.setCacheData = function(data, expiresIn) {
        cache[key] = {
            data: data,
            timestamp: Date.now(),
            expiresIn: expiresIn
        };
    };
    next();
}

// Example route with caching middleware
app.get('/', cacheMiddleware, (req, res) => {
    // Generate or fetch data
    const data = 'Response data';
    // Set cache data with expiration time (e.g., 1 minute)
    res.setCacheData(data, 60 * 1000);
    res.send(data);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
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





