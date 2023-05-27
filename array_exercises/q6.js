let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLength(array) {
  return array.map(element => element.length).filter(number => number%2 != 0);
}

console.log(oddLength(arr));

