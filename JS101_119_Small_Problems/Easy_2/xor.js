const xor = (arg1, arg2) => {
  if ((arg1 && arg2) || (!arg1 && !arg2)) return false;
  else return true;
}


console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true


//Further Exploration.
//Something like unfriend(block) someone on social media could be implemented with xor, since as long as one side agree, they should no longer be friends.
//It does not, since it has to make sure both operands meet the conditions all the time.