#!/usr/bin/node
function printMessage (...args) {
  if (args.length === 0) {
    console.log('No argument');
  } else if (args.length === 1) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }
}
// Test the function
printMessage(); // No argument
printMessage('Hello'); // Argument found
printMessage('Hello', 'World'); // Arguments found
