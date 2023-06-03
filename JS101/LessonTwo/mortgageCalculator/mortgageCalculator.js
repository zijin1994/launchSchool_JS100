//Take user input, and validate it.
//Perform calculation to get monthly interest rate and loan duration in months.
//Perform calculation to get result.
//Log the result and ask if user want another calculation.
//All the calculation can be put into a function.

//optional: give different language version.

const { question } = require("readline-sync");

//add arrow before prompt messages.
const prompt = message => {
  console.log(`=> ${message}`);
}

//check if input is valid number, also handle the case where input contains only space.
const isNotNumber = input => {
  return Number.isNaN(Number(input)) || input.trim().length === 0;
};

//calculate the monthly payment.
const calculation = (loanAmount, apr, durationInMonth) => {
  //Handle APR input, if it is in form like .05, use it directly. Otherwise, perform division to convert it to the right amount.
  if (apr.trim().charAt(0) === '.') {
    apr = Number(apr);
  }
  else {
    apr = Number(apr) / 100;
  }

  let monthlyInterestRate = apr / 12;
  loanAmount = Number(loanAmount);
  durationInMonth = Number(durationInMonth);
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-durationInMonth))));

  return monthlyPayment;
}

prompt("Welcome to Zijin's not so fancy Mortgage Calculator!");

while (true) {
  prompt("Please enter the loan amount in dollars: ");
  let loanAmount = question();

  while (isNotNumber(loanAmount)) {
    prompt("Please enter a valid amount!");
    loanAmount = question();
  }

  prompt("Please enter the Annual Percentage Rate (APR) eg: 5% should be 5 or .05: ");
  let apr = question();

  while (isNotNumber(apr)) {
    prompt("Please enter a valid amount!");
    apr = question();
  }

  prompt("Please enter the duration of the loan in months: ");
  let durationInMonth = question();

  while (isNotNumber(durationInMonth)) {
    prompt("Please enter a valid duration in months!");
    durationInMonth = question();
  }

  let result = calculation(loanAmount, apr, durationInMonth);
  prompt(`The monthly payment would be: $${result.toFixed(2)}`);

  prompt("Do you want another calculation? y) yes n) no");
  let answer = question().toLowerCase();

  if (answer === 'n') {
    prompt("Thank you for using Zijin's not so fancy Mortgage Calculator!");
    break;
  }
  console.clear();
}
