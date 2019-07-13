/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//adding a class game.
//creating constructors.
//setting the missed to 0. this will act as a counter during the game.
//creating phrases.
//setting the active phrase to null since we don't have a phrase set yet.
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            new Phrase ('Barking Up The Wrong Tree'),
            new Phrase ('Back to Square One'),
            new Phrase ('Beauty Is In The Eye Of The Beholder'),
            new Phrase ('Curiosity Killed The Cat'),
            new Phrase ('Make lemonade')
        ];
        this.activePhrase = null;
    } 

//get random phrase by using math.random and returning a number which will be used to create a random phrase
    getRandomPhrase() {            
        let index = Math.floor(Math.random() * this.phrases.length);
        // console.log(this.phrases[index]);
        return this.phrases[index];  
    }

//hides the start screen overlay.
//calls the getRandomPhrase method
//sets the activePhrase property with the chosen phrase. 
    startGame () {
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(); 
    }

//checks to see if the button clicked matches a letter in the phrase. 
//if it does, it adds the class and attribute to make the letter not clickable anymore.
//then checks for win if its the chosen class and removes life if its the wrong class.
//also, if checkfor win is true, then end game.
    handleInteraction (e) {
        console.log(this);
        if (this.activePhrase.checkLetter(e.target.textContent)) {
            this.activePhrase.showMatchedLetter(e.target.textContent);
            $(e.target).addClass('chosen').attr('disabled', true);
            this.checkForWin();
        } else {
            $(e.target).addClass('wrong').attr('disabled', true);
            this.removeLife();
        }  

    };

//the remove life function keeps track of the counter (missed)
//if the counter is less than of equal to 5 hearts, it replaces each live heart with a lost heart image
//also, if the counter equals 5, then it replaces the hearts as well as sets gameOver.
    removeLife() {
        this.missed++;
            if (this.missed <= 5) {
                $('.tries [src="images/liveHeart.png"]:first').attr('src', "images/lostHeart.png");
            } 

            if (this.missed === 5) {
                this.gameOver(false);
            }
    }

//the checkForWin method checks to see if all the letters are guessed (meaning you guessed it right), then call gameover
    checkForWin() {
        let hideClassesForLetters = $('.hide').length;
        if (hideClassesForLetters === 0) {
            this.gameOver(true);
        }
    }

//the gameOver method shows the overlay we previously hid. 
//if the player wins then it shows the message you win as well changing the class from lose to win.
//if the player loses then it shows the message you lose as well as changing the class from win to lose.
//after it goes through the conditional, it resets the game.
    gameOver (gameWon) {
        // console.log(gameWon);
        $('#overlay').show();
        if (gameWon) {
            $('#game-over-message').text('You win!');
            $('.start').removeClass('lose').addClass('win');
        } else {
            $('#game-over-message').text('You lose!');
            $('.start').removeClass('win').addClass('lose'); 
        }
        this.resetGame();
    }

//the resetGame method resets everything back
//it resets all the letters and starts a new phrase.
//in order to do that, it removes all the li elements from ul that we dynamically set.
//it also enables all the alphabet buttons again.
//and it resets the hearts back to liveHeart
    resetGame () {
        $('#phrase ul').text('');
        $('.key').removeClass('chosen').removeClass('wrong').removeAttr('disabled');
        $('.tries [src="images/lostHeart.png"]').attr('src', "images/liveHeart.png");
    }
}


