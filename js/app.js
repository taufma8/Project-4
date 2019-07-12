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
    const keyPress = e.key.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const keys = $('.key');
    if (alphabet.includes(keyPress)) {
        for (let key of keys) {
            if (key.innerText == keyPress) {
                key.click();
            }
        }
    }
    
});
// document.addEventListener('keydown', function (event) {
//     const keyPressed = event.key.toLowerCase();
//     const validLetters = "abcdefghijklmnopqrstuvwxyz";
//     // const allKeys = document.getElementsByClassName("key");
//     if (validLetters.includes(keyPressed)) {
//         for (let key of allKeys) {
//             if (key.innerText == keyPressed) {
//                 key.click();
//             }
//         }
//     }
// });
// $(window).keypress(function (e) {
//     if (e.key >=64 || e.key === 'Spacebar') {
//       // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
//       e.preventDefault()
//       console.log('Space pressed')
//     }
//   })

// document.addEventListener('DOMContentLoaded', anyKey);

// function keyboard () {
//     $('.key').on('keydown', anyKey);
//     document.body.addEventListener('keydown', anyKey);
// }

// function anyKey (e) {
//     let char = e.char || e.charCode || e.which;
//     // console.log(char);
//     let s = String.fromCharCode(char);
//     console.log(s);
// }
// // let keyboard = [];
// document.addEventListener('keypress', event => {
//     const charList = 'abcdefghijklmnopqrstuvwxyz';
//     const key = event.key.toLowerCase();

//     if (charList.indexOf(key) === -1) {
//         return;
//     }
//     keyboard.push(key);
//     console.log(keyboard);
// });


// $('.key').on('keyup', function(){

//   });
// $(document).keyup( (e) => {
//     let keyPress = e.key;
//     // if ( $('#overlay').is(':visible') ) {
//     //   e.preventDefault;
//     // }
//     // else 
//     if ( !keyPressed.includes(keyPress) ) {
//       $('.key').each( (index, key) => {
//         if ( $(key).text() === keyPress ) {
//           game.handleInteraction(key);
//         }
//       });
//       keyPressed.push(keyPress);
//     }
//   });


// document.onkeydown = function(e) {
//     if (gameOver) {
//         resetGame();
//         gameOver = false;
//     } else {
//        if (e.keyCode >= 65 &&  e.keyCode <= 90) {
//            e.key.toLowerCase();
//        } 
//     }
// }

// B = '';
//     L;
//     for (let i = 65; 90 >= i; i++) {
//         L = String.fromCharCode(i);
//         B += '<button id="B2" on click="getLetter(\''+L+'\');">' + L + '</button>';
//     }
//     document.getElementById('box1').innerHTML = B;
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