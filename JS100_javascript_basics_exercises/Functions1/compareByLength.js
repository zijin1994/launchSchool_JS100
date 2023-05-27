const compareByLength = (first, second) => {
  if (first.length === second.length) return 0;
  return first.length > second.length ? 1 : -1;
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));

