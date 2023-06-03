// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const readline = require("readline-sync");
//desconstructing both language versions and assign them to e and c.
const { english, chinese } = require("./calculator_messages.json");

//add arrow before prompt.
function prompt(message) {
  console.log(`=> ${message}`);
}

//check if number is valid.
function invalidNumber(number) {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
}

//get input from user.
function numberInputHandler(language) {
  prompt(language.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(language.invalidNumber);
    number1 = readline.question();
  }

  prompt(language.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(language.invalidNumber);
    number2 = readline.question();
  }
  return [number1, number2];
}

function operationHandler(number1, number2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  return output;
}

//perform calculation with given language prompt.
function calculation(language) {
  //get input.
  let [number1, number2] = numberInputHandler(language);

  prompt(language.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(language.invalidOperation);
    operation = readline.question();
  }
  //perform calculation.
  let output = operationHandler(number1, number2, operation);
  console.log(`${language.result}${output}`);

}

prompt(english.greeting);
prompt(chinese.greeting);
prompt("Please enter 'e' for english, 输入 'c’ 切换中文模式");
let language = readline.question();
//based on user input, assign language to different object.
if (language === 'e') {
  language = english;
} else {
  language = chinese;
}

let anotherCal = true;

do {
  //perform calculation as long as 'anothercal' is equal to true.
  calculation(language);
  prompt(language.anotherCalculation);
  let answer = readline.question();

  while (!['y', 'n'].includes(answer)) {
    prompt(language.invalidInput);
    answer = readline.question();
  }

  if (answer === 'y') {
    anotherCal = true;
  } else {
    anotherCal = false;
    prompt(language.goodbye);
  }

} while (anotherCal);