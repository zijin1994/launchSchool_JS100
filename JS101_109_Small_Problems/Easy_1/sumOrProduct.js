const readlineAsync = require("readline-sync");

let number = readlineAsync.question('Please enter an integer greater than 0: ');
number = parseInt(number, 10);

let mode = readlineAsync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
mode = mode === 'p' ? 'product' : 'sum';

const result = mode === 'product' ? product(number) : sum(number);
console.log(`The ${mode} of the integers between 1 and ${number} is ${result}.`);




function product(number) {
  let result = 1;
  for (let i = 2; i <= number; i+=1) {
    result *= i;
  }
  return result;
}

function sum(number) {
  let result = 0;
  for (let i = 1; i <= number; i+=1) {
    result += i;
  }
  return result;
}