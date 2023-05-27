const isNegativeZero = a => {
  return 1/a === -Infinity;
}

console.log(isNegativeZero(-0));