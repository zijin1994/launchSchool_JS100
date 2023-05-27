const extractLanguage = locale => locale.split("_")[0];

const extractRegion = locale => locale.split("_")[1].split(".")[0];

const greet = (code) => {
  
 switch (code) {
  case 'en': return 'Hi!';
  case 'fr': return 'Salut!'
  case 'pt': return 'Ola!';
  case 'de': return 'Hallo!';
  case 'sv': return 'Hej!';
  case 'af': return 'Haai!';
  default: return 'This is not a valid input!';
 }
 
}


const localGreet = locale => {
  
  let language = extractLanguage(locale);
  
  let region = extractRegion(locale);
  
  if (language === 'en') {
    
    switch (region) {
      
      case 'US': return 'Hey!';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
      default:   return 'No such region!';
      
    }
  } else {
    
    return greet(language);
    
  }
  
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
