// Problem 4: Resolve Path
// Problem Statement: Create a function resolvePath(relativePath) that takes a relative path
//  as input and resolves it to an absolute path 
// using the path module. The function should print the resolved path to the console.

const path = require('path');

function resolvePath(relativePath) {
    // Resolve the relative path to an absolute path
    const absolutePath = path.resolve(relativePath);

    // Print the resolved absolute path to the console
    console.log('Resolved path:');
    console.log(absolutePath);
}

// Example usage:
const relativePath = 'folder/subfolder/file.txt';
resolvePath(relativePath);
