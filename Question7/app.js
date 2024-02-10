// 8. Problem: Express Error Handling

// Problem Statement: Create an Express route that throws an error if the request parameter "number" 
// is not a positive integer. Implement an error handling middleware to catch and handle this specific error, 
// returning a custom error message and a 400 Bad Request status.


// app.js

const express = require('express');
const app = express();

// Custom middleware function to log timestamp and HTTP method
function requestLoggerMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
    // Your implementation here
  }

// Register middleware globally to log for all routes
app.use(requestLoggerMiddleware)

// Example route
app.get('/', (req,res)=>{
    res.send("Hello world!!")
});

// Start the Express server
const port = process.env.PORT || 3000; // Choose any port you like
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// for running it curl "http://localhost:3000/greet?name=John" in terminal
