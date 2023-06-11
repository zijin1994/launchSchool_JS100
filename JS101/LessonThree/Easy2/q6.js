let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newArray = flintstones.flat();
console.log(newArray);
// console.log(flintstones);
let antherArray = [];
console.log(antherArray.concat(...flintstones));