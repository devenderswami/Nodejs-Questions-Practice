// Problem 5: File Extension Checker
// Problem Statement: Create a function checkFileExtension(filePath, expectedExtension) that takes a file 
// path and an expected file extension as input. The function should check if the file has 
// the expected extension using the path module and print the result to the console.
const path = require('path');
function checkFileExtension(filePath, expectedExtension) {
  // Extract the file extension from the file path
  const fileExtension = path.extname(filePath).slice(1);

  // Check if the file extension matches the expected extension
  if (fileExtension === expectedExtension) {
      console.log(`The file at '${filePath}' has the expected extension '${expectedExtension}'.`);
  } else {
      console.log(`The file at '${filePath}' does not have the expected extension '${expectedExtension}'. It has '${fileExtension}' instead.`);
  }}

checkFileExtension('test-files/file1.txt', 'txt')