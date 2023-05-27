const template = 'I VERB NOUN.';

const sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);


console.log(sentence('like', 'birds'));
// logs: I like birds.






let game = () => ({
    level: 1,
    score: 0
  });

console.log('Level: ' + game().level);
console.log('Score: ' + game().score);