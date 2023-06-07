const { question } = require("readline-sync");

//store opreations in object so we can use for loop instead.
const OPERATIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.floor(a / b),
  '%': (a, b) => a % b,
  "**": (a, b) => a ** b
}

const prompt = message => {
  console.log(`==> ${message}`);
}

const logResult = (num1, num2) => {
  for (let [sign, operation] of Object.entries(OPERATIONS)) {
    //invoking function stored in OPERATIONSS with given numbers to get result, also grab operation sign for output.
    let result = operation(num1, num2);
    prompt(`${num1} ${sign} ${num2} = ${result}`);
  }
}

prompt('Enter the first number:');
let number1 = Number(question());
prompt('Enter the second number:');
let number2 = Number(question());

logResult(number1, number2);