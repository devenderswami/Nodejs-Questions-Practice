// . Problem: Express Static Files

// Problem Statement: Create an Express application that serves static files (e.g., HTML, CSS, images) from a "public" directory. 
// Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.

// Expected Output: Accessing the root ("/") should return the content of "public/index.html".

// Test Cases:

// Request to / should return the content of "public/index.html".
// Request to /styles/style.css should return the content of "public/styles/style.css".


const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Ensure accessing root ("/") returns the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Certainly! Let me break down the line app.use(express.static(path.join(__dirname, 'public'))); for you:

// express.static: This is a built-in middleware function in Express. It is used to serve static files such as images, CSS files,
//  JavaScript files, etc. It takes a directory path as an argument and serves the files in that directory.

// path.join(__dirname, 'public'): The path module is a built-in Node.js module that provides utilities for
//  working with file and directory paths. __dirname is a global variable in Node.js that represents the directory 
//  name of the current module. path.join() is a method that concatenates given path segments into one normalized path.

// So, path.join(__dirname, 'public') joins the current directory name (__dirname) with the directory name 'public', 
// resulting in the absolute path to the "public" directory.

// app.use(): This is an Express method used to mount middleware functions. Middleware functions are 
// functions that have access to the request object (req), the response object (res), and the next middleware 
// function in the application’s request-response cycle. They can execute any code, make changes to the request 
// and response objects, end the request-response cycle, or call the next middleware function in the stack.

// In this case, app.use() is used to mount the express.static middleware to the Express application. 
// This middleware will be executed for every incoming request. When a request is made, Express will check if the 
// requested resource exists in the specified directory ('public'). If it does, it will serve that file; otherwise, 
// it will move on to the next middleware in the stack.

// In summary, the line app.use(express.static(path.join(__dirname, 'public'))); sets up Express to serve static files 
// from the "public" directory, making those files accessible to clients when they make HTTP requests to the server.