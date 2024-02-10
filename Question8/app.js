// Problem: Express Error Handling

// Problem Statement: Create an Express route that throws an error if the request parameter "number"
//  is not a positive integer. Implement an error handling middleware to catch and handle this specific error, 
//  returning a custom error message and a 400 Bad Request status.



const express = require('express');
const app = express();

// Middleware to check if the parameter is a positive integer
const validateNumberParam = (req, res, next) => {
  const number = parseInt(req.params.number);
  if (Number.isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    const error = new Error('Parameter "number" must be a positive integer.');
    error.status = 400;
    next(error);
  } else {
    next();
  }
};

// Error handling middleware for catching specific errors
const errorHandler = (err, req, res, next) => {
  if (err.status === 400) {
    res.status(400).json({ error: err.message });
  } else {
    // Pass on the error to the default Express error handler
    next(err);
  }
};

// Route that throws an error if the "number" parameter is not a positive integer
app.get('/test/:number', validateNumberParam, (req, res) => {
  console.log("req.params.number",req.params.number)
  const number = parseInt(req.params.number);
  res.json({ message: `You provided the positive integer: ${number}` });
});

// Register the error handling middleware
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Serialize For example, if you have a JavaScript object like this:

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"    
//   };


// Serialize
// {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
//   }


// https://chat.openai.com/share/b537e3aa-031b-4078-89ef-988a47025542
  
  


// you're expecting the number parameter as part of the URL path (/test/:number), but in your curl request,
//  you're passing it as a query parameter (?number=11). 

 //use this curl command curl "http://localhost:3000/test/11"


//  In the context of an Express.js application, when you see .json() being used, 
//  it typically refers to a method provided by Express to send JSON-formatted responses to the client.

// In the Express framework, the res.json() method is used to send a JSON response to the client. 
// It takes an object as an argument, converts it to JSON format using JSON.stringify(), sets 
// the appropriate Content-Type header in the response to application/json, and sends the JSON string as the response body.





// In this code:

// 1.We define a middleware function named validateNumberParam to check if the parameter "number" is a positive integer. 
// 2. If it's not, it creates a new error object with a custom message and sets its status to 400 (Bad Request). 
//    The middleware then passes the error to the next middleware in the stack using next(error).
// 3.We define another middleware function named errorHandler to catch and handle specific errors. 
//   In this case, it checks if the error status is 400 and sends a JSON response with the error message and a 400 status code. 
//   If the error is not of status 400, it passes it to the default Express error handler using next(err).
// 4.We define a route (/:number) that uses the validateNumberParam middleware before handling the request. If the parameter "number" passes validation, it sends a JSON response with a success message.
//   Finally, we register the errorHandler middleware globally to handle errors throughout the application.
//  This setup ensures that if the "number" parameter is not a positive integer, the client receives a custom error message with a 400 status code.


// for running it curl "http://localhost:3000/test?number=11" in terminal
