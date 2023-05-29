let scores = [96, 47, 113, 89, 100, 102];


// use filter.
const filter = scores => {
  let result = scores.filter(number => number >= 100)
                     .length;
  return result;                 
}

console.log(filter(scores));

// for loop.
const forLoop = scores => {
  let count = 0;
  for (let number of scores) {
    number >= 100 ? count += 1 : count;
  }
  return count;
}

console.log(forLoop(scores));


// sort and count from start using while loop.
const sortArray = scores => {
  //sort array in descending order.
  scores.sort((a, b) => b - a);
  let index = 0;
  //keep moving the index right until it hits the first number that is < 100.
  while (scores[index] >= 100) index += 1;
  return index;
}

console.log(sortArray(scores));


