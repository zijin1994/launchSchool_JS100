let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLength = arr => {
  return arr.reduce((combine, value) => {
    if (value.length %2 === 1){
      combine.push(value.length);
    }
    return combine;
  }, [])
}

console.log(oddLength(arr));