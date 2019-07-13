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
});

$('.key').on('click', function (e) {
    game.handleInteraction(e);
});

//adds keyboard functionality for game.
$(document).on('keydown', function (e) {
    const letterPress = e.key.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const keys = $('.key');
    if (alphabet.includes(letterPress)) {
        for (let key of keys) {
            if (key.innerText == letterPress) {
                key.click();
            }
        }
    }
    
});