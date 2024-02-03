// Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its 
// content asynchronously using the fs module. The function should print the content to the console.


// Reading a file asynchronously means that the file reading operation does not block the execution of the rest of your program. 
// In Node.js, many I/O operations, including file reading, are designed to be non-blocking and asynchronous.
// In a synchronous file read operation, the program would wait until the entire file is read before moving on to the next 
// instruction. This could potentially cause your program to hang or become unresponsive, especially when dealing with large files
//  or in situations where I/O operations take a significant amount of time.

// On the other hand, asynchronous file reading allows your program to continue executing other tasks 
// while the file reading operation is in progress. When the file reading operation is complete, a callback function 
// is invoked to handle the results.


const fs = require('fs');
function readFileContent(filePath) {
    // Implementation
    console.log(filePath)
    fs.readFile(filePath, 'utf8',(err,data)=>{
           if(err){
              console.log(`Error reading file:${err.message}`)
           }else{
            console.log(`File Content:\n${data}`)
           }
})

    }



const filePath = './test-files/file.txt';
const filePath1 = './test-files/empty-file.txt';
const filePath2 = './test-files/empty-file-1.txt';
readFileContent(filePath);
readFileContent(filePath1);
readFileContent(filePath2);