let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


// use indexOf and check if it is -1
const useIndexOf = arr => {
  return arr.indexOf(3) != -1;
}

// use includes
const useIncludes = arr => {
  return arr.includes(3);
}

// use filter to return 3, check if array.length > 0
const useFilter = arr => {
  return arr.filter(number => number === 3).length > 0;
}

console.log(useIndexOf(numbers1));
console.log(useIndexOf(numbers2));
console.log(useIndexOf(numbers3));

console.log(useIncludes(numbers1));
console.log(useIncludes(numbers2));
console.log(useIncludes(numbers3));

console.log(useFilter(numbers1));
console.log(useFilter(numbers2));
console.log(useFilter(numbers3));