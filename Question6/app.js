// 6. Problem: Express Route Handling

// Problem Statement: You are building a web application using Express in Node.js. 
// Create an Express route to handle GET requests to the endpoint "/greet" that takes a query parameter "name" and 
// returns a personalized greeting. 
// If the name parameter is not provided, the default greeting should be "Hello, Guest!".


// app.js

const express = require('express');
const routes = require('./routes/route'); // Import the routes module

const app = express();

// Define the route for handling GET requests to "/greet"
app.get('/greet', routes.handleGreetRequest);

// Start the Express server
const port = 3000; // Choose any port you like
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// for running it curl "http://localhost:3000/greet?name=John" in terminal
