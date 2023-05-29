function greet(greeting = 'Hello', who = 'world') {
  console.log(greeting + ', ' + who + '!');
}


greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!