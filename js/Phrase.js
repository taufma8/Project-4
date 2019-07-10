/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
        this.phrase = phrase.toLowerCase();
     }

//this adds letter placeholders to the display when the game starts.
//select the ul.
//set its innerHTML to empty string.
//split the letters
//for each letter, create an li element
//append the li to the ul
//if the letter has a space, add a class name 'space'.
//if the letter has an actual letter, add it to the innerHtml, set the class name to letter and add the letter in.
     addPhraseToDisplay () {
          let ul = document.querySelector('#phrase ul');
          ul.innerHTML = '';
          const splitPhrase = this.phrase.split('');
          splitPhrase.forEach(letter => {
               const li = document.createElement('li');
               ul.appendChild(li);
               if (letter === ' ') {
                    li.className = ('space');
               } else {
                    li.innerHTML = letter;
                    li.className = (`hide letter ${letter}`);
               }
          });
     };
//checks to see if the letter selected by the player matches a letter in the phrase.
     checkLetter(letter) {
          return this.phrase.indexOf(letter) >= 0;
     }

//reveals the letter(s) on the board that matches the player's selection.
     showMatchedLetter(letter) {
          let selector = `.letter.${letter}`;
          $(selector).removeClass('hide').addClass('show');

     }
 }