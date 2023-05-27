let rlSync = require("readline-sync");

let number1 = Number(rlSync.question("Enter the first number\n"));
let number2 = Number(rlSync.question("Enter the second number\n"));
let total = number1 + number2;
console.log(`The numbers ${number1} and ${number2} adds to ${total}.`);