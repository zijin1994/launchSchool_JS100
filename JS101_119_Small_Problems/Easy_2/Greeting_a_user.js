const { question } = require("readline-sync");
const greeting = name => {
  //can also use name[name.length-1]
  if (name.charAt(name.length-1) === "!") {
    //can also use name.slice(0, -1)
    console.log(`HELLO ${name.substring(0, name.length-1).toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

let name = question("What is your name? ");
greeting(name);


