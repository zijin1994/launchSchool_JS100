let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];


const findIntegers = array => {
  const result = array.filter(element => Number.isInteger(element));
  return result;
}

let integers = findIntegers(things);
console.log(integers);