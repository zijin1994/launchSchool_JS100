let arg = 55;

function evenOrOdd(args) {
  if (!Number.isInteger(args)) {
  // if (parseInt(args) !== args) {
    console.log('It is not an integer!');
    return;
  }
  if (args % 2 === 0) {
    console.log("It is an even number.");
  } else {
    console.log("It is an odd number.");
  }
}

evenOrOdd(arg);