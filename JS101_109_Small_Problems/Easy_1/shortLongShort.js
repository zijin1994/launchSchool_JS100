function shortLongShort(first, second) {
  //eliminate cases where either of them is empty.
  if (first.length === 0) return second;
  else if (second.length === 0) return first;
  else {
    return first.length > second.length ? second + first + second : first + second + first;
  }
}



console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));  