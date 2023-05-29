
const finMax = (list) => {
  let max = list[0];
  for (let number of list) {
    max = number > max ? number : max;
  }
  return max;
}


console.log(finMax([1,6,3,2]));
console.log(finMax([-1,-6,-3,-2]));

console.log(Math.max(1,6,3,2));
console.log(Math.max(-1,-6,-3,-2));