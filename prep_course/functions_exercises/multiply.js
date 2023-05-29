let readlineSync = require("readline-sync");

const readNumber = prompt => {
  let number = Number(readlineSync.question(prompt));
  return number;
}

const mutiply = (a, b) => a * b;

const resultPrompt = (a, b) => {
  let result = mutiply(a, b);
  console.log(`${a} * ${b} = ${result}`);
  
}

let firstNumber = readNumber("Enter the first number: ");
let secondNumber = readNumber("Enter the second number: ");

resultPrompt(firstNumber, secondNumber);