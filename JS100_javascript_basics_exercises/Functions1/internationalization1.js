const greet = (code) => {
 let greetings;

 switch (code) {
  case 'en':
   greetings = 'Hi!';
   break;
  case 'fr':
   greetings = 'Salut!';
   break;
  case 'pt':
   greetings = 'Ola!';
   break;
  case 'de':
   greetings = 'Hallo!';
   break;
  case 'sv':
   greetings = 'Hej!';
   break;
  case 'af':
   greetings = 'Haai!';
   break;
  default:
   greetings = 'This is not a valid input!';
 }
 
 console.log(greetings);
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'