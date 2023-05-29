const rlSync = require("readline-sync");

const name = rlSync.question("What's your name?\n");

console.log(`Good morning, ${name}!`);