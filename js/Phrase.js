/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
        this.phrase = phrase.toLowerCase();
     }

//this adds letter placeholders to the display when the game starts.
     addPhraseToDisplay () {
        // let phrase = game.getRandomPhrase();
        const phrase = this.phrase.split;
        console.log(phrase);
     };

//checks to see if the letter selected by the player matches a letter in the phrase.
     checkLetter(letter) {};

//reveals the letter(s) on the board that matches the player's selection.
     showMatchedLetter(letter) {};
 }