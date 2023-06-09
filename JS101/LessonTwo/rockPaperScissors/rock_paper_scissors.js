const { question } = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
//Put all of the choices in an object as keys. Then for each choice,
//put the ones that it can beat in an array as value.
//We could also improve the performance by using set for faster look up time,
//but here we only have two values so it does not matter too much.
const BEAT = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};
//Initialize match score. Index 0 is user score, index 1 is computer score.
const MATCH_SCORE = [0, 0];

//check if there is a winner.
function hasGrandWinner() {
  return (MATCH_SCORE[0] === 3 || MATCH_SCORE[1] === 3);
}

function printGrandWinner() {
  if (MATCH_SCORE[0] === 3) {
    console.log(`Congraduations! You are the grand winner!\nThe final score is: ${MATCH_SCORE[0]} : ${MATCH_SCORE[1]}`);
  } else {
    console.log(`Sorry! Computer is the grand winner!\nThe final score is: ${MATCH_SCORE[0]} : ${MATCH_SCORE[1]}`);
  }
}

function resetScore() {
  MATCH_SCORE[0] = 0;
  MATCH_SCORE[1] = 0;
}

function displayScore() {
  console.log(`Current score is: User: ${MATCH_SCORE[0]}, Computer: ${MATCH_SCORE[1]}`);
}

//add point to user/computer.
function addPoint(choice, computerChoice) {
  if (userWins(choice, computerChoice)) {
    MATCH_SCORE[0] += 1;
  } else if (isDraw(choice, computerChoice)) {
    // does nothing.
  } else {
    MATCH_SCORE[1] += 1;
  }
}

//check if input is valid, including one letter input.
function isValidInput(choice) {
  if (VALID_CHOICES.includes(choice)) {
    return true;
  }
  // check for one letter input.
  let validChoices = VALID_CHOICES.filter(element => element[0] === choice);
  return validChoices.length > 0;
}

//convert one letter input to full length input.
function toFullLengthInput(choice) {
  let choices = VALID_CHOICES.filter(element => element[0] === choice);
  return choices;
}

//validate 's' input, also handles the case where user inputs 1 or 2.
function isSpockOrScissors(choice) {
  return ['scissors', 'spock', '1', '2'].includes(choice);
}

//handle 's' input case where user enters 1 or 2 instead of full name of choice.
function numberInputHandler(choice) {
  if (choice === '1') {
    return 'scissors';
  } else {
    return 'spock';
  }
}

//check if user wins.
function userWins(choice, computerChoice) {
  // access the values of what user's choice can beat in BEAT object
  // check if it includes computer's choice
  return BEAT[choice].includes(computerChoice);
}

//check if it is draw.
function isDraw(choice, computerChoice) {
  return choice === computerChoice;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (isDraw(choice, computerChoice)) { //checking this equal condition first so we don't have to write anything for else condition, which is just all losing conditions.
    console.log("It is a tie!");
  } else if (userWins(choice, computerChoice)) {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

//While loop to keep playing without using break.
let playAgain = true;
while (playAgain && !hasGrandWinner()) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = question();

  while (!isValidInput(choice)) {
    prompt("That's not a valid choice");
    choice = question();
  }

  if (choice.length === 1) {
    let choices = toFullLengthInput(choice); // if 's' was the input, this array would contain two values.

    if (choices.length > 1) { // handle 's' input
      prompt("There are two choices starting with letter 's', pick one: 1) scissors 2) spock");
      choice = question();

      while (!isSpockOrScissors(choice)) { // check if user input 1 or 2 or the full name of choice.
        prompt("That's not a valid choice");
        choice = question();
      }

      if (choice === '1' || choice === '2') { // if user types 1 or 2 instead of the full name of choice.
        choice = numberInputHandler(choice);
      }
    } else { // otherwise, there is only one value in choices array, simply assign it to choice.
      choice = choices[0];
    }

  }

  let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  addPoint(choice, computerChoice);
  displayScore();

  if (hasGrandWinner()) {
    printGrandWinner();

    prompt("Do you want to play again (y/n)?");
    let answer = question().toLowerCase();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt("Please enter 'y' or 'n'.");
      answer = question().toLowerCase();

    }

    if (answer[0] !== 'y') {
      playAgain = false;
    }

    //reset score and clear the console.
    resetScore();
    console.clear();
  }

}
