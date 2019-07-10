/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase('life is liek a box of chocolate');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);

//  game.phrases.forEach((phrase, index) => {
//      console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//  });

// const logPhrase = (phrase) => {
//       console.log(`Phrase - phrase: `, phrase.phrase);
// };

const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
// const phrase = new Phrase();
// game.getRandomPhrase();
// phrase.addPhraseToDisplay();
//  logPhrase(game.getRandomPhrase());
