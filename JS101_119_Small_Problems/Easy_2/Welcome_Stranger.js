const greetings = (nameArray, infoObj) => {
  let name = nameArray.join(' ');
  return `Hello, ${name}! Nice to have a ${infoObj.title} ${infoObj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.