let array = [3, 5, 7];

const sumOfSquares = arr => {
  return arr.reduce((accumulator, number) => accumulator + number * number, 0);
}

console.log(sumOfSquares(array));