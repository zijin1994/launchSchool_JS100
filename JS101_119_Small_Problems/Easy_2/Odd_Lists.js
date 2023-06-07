const oddities = array => {
  let result = [];
  for (let i = 0; i < array.length; i+=2) {
    result.push(array[i]);
  }
  return result;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


//Further Exploration
const evenities = array => {
  return array.filter((element, index) => index % 2 !== 0);
}

const even = array => {
  return array.reduce((accumulator, curr, index) => {
    if (index % 2 !== 0) return [...accumulator, curr];
    else return accumulator;
  }, [])
}




console.log(evenities([2, 3, 4, 5, 6, 7]));//logs[3, 5, 7]
console.log(even([1, 4, 53, 46, 13, 1, 0]));//logs[4, 46, 1]