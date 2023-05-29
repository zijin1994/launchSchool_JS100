function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}


const greet = () => {
  console.log(greeting() + ', ' + recipient() + '!');
}

greet();