// Problem: Express Middleware
// Problem Statement: Implement an Express middleware function that logs the timestamp and the HTTP method 
// of every incoming request to the server.




// app.js

const express = require('express');
const app = express();


function requestLoggerMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);    next()

    // Your implementation here
  }

  app.use(requestLoggerMiddleware)

app.get('/', (req,res)=>{
    res.send("Hello world!!")
});

// Start the Express server
const port = process.env.PORT || 3000; // Choose any port you like
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// for running it curl "http://localhost:3000/greet?name=John" in terminal
