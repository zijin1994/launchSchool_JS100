const allMatches = (list, regex) => {
  return list.filter(string => regex.test(string));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); 