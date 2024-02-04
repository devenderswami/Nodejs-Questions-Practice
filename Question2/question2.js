// Problem Statement: Create a function writeToFile(filePath, content) that 
// takes the path to a file and user input content as input. 
// The function should write the content to the specified file using the fs module.
const fs = require('fs')
function writeToFile(filePath, data) {
    // Implementation
    fs.writeFile(filePath,data,'utf8',(err)=>{
        if(err){
            console.log(`Error reading file:${err.message}`)
         }else{
          console.log(`Added Content in file:\n${filePath}`)
         }
    })
}


filePath='test-files/output.txt'
filePath1='test-files1/output.txt'
writeToFile(filePath1,'This is test content')
writeToFile(filePath,'This is test content')
