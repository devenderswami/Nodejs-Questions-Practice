// Problem 3: Execute Command
// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it
//  using the child_process module. The function should print the output of the command to the console.


const {exec} = require('child_process');


function executeCommand(command) {
    // Implementation
    exec(command,(err,stdout,stderr)=>{
        if(err){
            console.error('Error while executing the commaand')
            return
        }

        console.log('Command output:');
        console.log(stdout);

        if(stderr){
            console.log('Command error:');
            console.log(stderr);
        }

    })
}

let executeCommandValue = "ls -la"
executeCommand(executeCommandValue)




