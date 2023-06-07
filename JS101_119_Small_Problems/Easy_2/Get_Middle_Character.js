const centerOf = string => {
  let start = 0;
  let end = string.length - 1;
  // This handles both odd and even cases, if it is odd length, it returns the middle index, if it is even, it returns the last index of the first half of the array.
  let middle = start + Math.floor((end - start)/2);
  
  console.log(string.length % 2 === 0 ? string.slice(middle, middle + 2) : string[middle]);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"