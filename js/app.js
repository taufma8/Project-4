/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//declare the game variable
let game;

//creating an event handler for the reset button to create a new game
//once a letter is clicked, then run the handle interaction to see if it matches the letter.
$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();

    $('.key').on('click', function (e) {
        game.handleInteraction(e);
    });
});

//  const phrase = new Phrase('life is liek a box of chocolate');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);

//  game.phrases.forEach((phrase, index) => {
//      console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//  });

// const logPhrase = (phrase) => {
//       console.log(`Phrase - phrase: `, phrase.phrase);
// };

// const phrase = new Phrase();
// phrase.addPhraseToDisplay();
//  logPhrase(game.getRandomPhrase());

// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase (randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);