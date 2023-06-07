const penultimate = string => {
  let arrayOfString = string.split(' ');
  return arrayOfString[arrayOfString.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs trueconsole.log(penultimate("last word") === "last"); // logs true


//Further Exploration.
const middleWord = string => {
  if (string.trim() === "") return -1;
  let arrayOfString = string.split(" ");
  
  let start = 0;
  let end = arrayOfString.length - 1;
  let middle;
  // If string has odd number of words, return the middle one, otherwise, round down the index.
  // These two cases can be merged into just one: middle = start + Math.floor((end - start)/2), because when it is even length, Math.floor() does not do anything.
  if (arrayOfString.length % 2 !== 0){
    middle = start + (end - start)/2;
  } else {
    middle = start + Math.floor((end - start)/2);
  }
  
  return arrayOfString[middle];
}

console.log(middleWord("Launch School is great! haha")); // logs is
console.log(middleWord("Launch School is great!")); // logs School
console.log(middleWord("Launch")); // logs Launch
console.log(middleWord("")) // logs -1