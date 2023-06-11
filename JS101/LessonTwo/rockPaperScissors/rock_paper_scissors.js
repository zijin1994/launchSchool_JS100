const { question } = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const [YOU_WON, COMPUTER_WON, TIE] = [1, 2, 0];
const BEAT = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

const WINNING_SCORE = 3;

function lowerCaseQuestion() {
  let result = question().toLowerCase();
  return result;
}

function hasGrandWinner(userScore, computerScore) {
  return (userScore === WINNING_SCORE || computerScore === WINNING_SCORE);
}

function printGrandWinner(userScore, computerScore) {
  console.log("********************");
  if (userScore === WINNING_SCORE) {
    console.log(`Congraduations! You are the grand winner!\nThe final score is: ${userScore} : ${computerScore}`);
  }
  else {
    console.log(`Sorry! Computer is the grand winner!\nThe final score is: ${userScore} : ${computerScore}`);
  }
}

function resetScore() {
  return [0, 0]
}

function displayScore(userScore, computerScore) {
  console.log(`Current score is: User: ${userScore}, Computer: ${computerScore}`);
}

function addPoint(userScore, computerScore, result) {
  if (result === YOU_WON) {
    userScore += 1;
  }
  else if (result === COMPUTER_WON) {
    computerScore += 1;
  }
  return [userScore, computerScore];
}

function getUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = lowerCaseQuestion();
  return choice;
}

function isOneLetterInput(choice) {
  return choice.length === 1;
}

function referToMany(choices) {
  return choices.length > 1;
}

function validateUserChoice(choice) {
  while (!isValidInput(choice)) {
    prompt("That's not a valid choice");
    choice = lowerCaseQuestion();
  }

  if (isOneLetterInput(choice)) {
    let choices = toFullLengthInput(choice); // if 's' was the input, this array would contain two values.

    if (referToMany(choices)) { // handle 's' input
      choice = sInputHandler();
    }
    else { // otherwise, there is only one value in choices array, simply assign it to choice.
      choice = choices[0];
    }
  }
  return choice;
}

function isValidInput(choice) {
  if (VALID_CHOICES.includes(choice)) {
    return true;
  }

  let validChoices = VALID_CHOICES.filter(element => element[0] === choice);
  return validChoices.length > 0;
}

function toFullLengthInput(choice) {
  let choices = VALID_CHOICES.filter(element => element[0] === choice);
  return choices;
}

function isSpockOrScissors(choice) {
  return ['scissors', 'spock', '1', '2'].includes(choice);
}

function validateSpockOrScissors(choice) {
  while (!isSpockOrScissors(choice)) { // check if user input 1 or 2 or the full name of choice.
    prompt("That's not a valid choice");
    choice = lowerCaseQuestion();
  }
  return choice;
}

function numberInputHandler(choice) {
  if (choice === '1') {
    return 'scissors';
  }
  else {
    return 'spock';
  }
}

//handle s input.
function sInputHandler() {
  prompt("There are two choices starting with letter 's', pick one: 1) scissors 2) spock");
  let choice = lowerCaseQuestion();
  choice = validateSpockOrScissors(choice);

  if (choice === '1' || choice === '2') {
    choice = numberInputHandler(choice);
  }
  return choice;
}

function getComputerChoice() {
  let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
  return VALID_CHOICES[randomIndex];
}

function userWins(choice, computerChoice) {
  // access the values of what user's choice can beat in BEAT object
  // check if it includes computer's choice
  return BEAT[choice].includes(computerChoice);
}

function isDraw(choice, computerChoice) {
  return choice === computerChoice;
}

function matchResult(choice, computerChoice) {
  if (isDraw(choice, computerChoice)) {
    return TIE;
  }
  else if (userWins(choice, computerChoice)) {
    return YOU_WON;
  }
  else {
    return COMPUTER_WON;
  }
}

function displayWinner(choice, computerChoice, result) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (result === TIE) {
    console.log("It is a tie!");
  }
  else if (result === YOU_WON) {
    console.log("You win!");
  }
  else {
    console.log("Computer wins!");
  }
}

function anotherGame() {
  prompt("Do you want to play again (y/n)?");
  let answer = lowerCaseQuestion();

  answer = validateAnotherGameAnswer(answer);
  if (answer === 'y') {
    return true;
  } else {
    return false;
  }
}

function validateAnotherGameAnswer(answer) {
  while (!isValidAnotherGameAnswer(answer)) {
    prompt("Please enter 'y' or 'n'.");
    answer = lowerCaseQuestion();
  }
  return answer;
}

function isValidAnotherGameAnswer(answer) {
  return answer === 'n' || answer === 'y';
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function welcomeMessage() {
  console.log("**********Welcome to rock paper scissors lizard spock game!**********");
}

function clearScreen() {
  console.clear();
}

clearScreen();
welcomeMessage();

let [userScore, computerScore] = resetScore();
let playAgain = true;

while (playAgain && !hasGrandWinner(userScore, computerScore)) {

  let choice = getUserChoice();
  choice = validateUserChoice(choice);

  let computerChoice = getComputerChoice();
  let result = matchResult(choice, computerChoice);
  clearScreen();

  displayWinner(choice, computerChoice, result);

  [userScore, computerScore] = addPoint(userScore, computerScore, result);
  displayScore(userScore, computerScore);

  if (hasGrandWinner(userScore, computerScore)) {
    printGrandWinner(userScore, computerScore);

    playAgain = anotherGame();

    //reset score and clear the console.
    [userScore, computerScore] = resetScore();
    clearScreen();
  }
}
