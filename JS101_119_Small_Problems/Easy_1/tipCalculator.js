const readlineSync = require("readline-sync");

const bill = readlineSync.question('What is the bill? ');
const tipPercentage = readlineSync.question('What is the tip percentage? ');

const tip = Number(bill) * (Number(tipPercentage)/100);
const total = Number(bill) + tip;

console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));

