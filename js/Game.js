/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// {phrase: 'Don\'t Cry Over Spilled Milk.'},
// {phrase: 'Barking Up The Wrong Tree.'},
// {phrase: 'Back to Square One.'},
// {phrase: 'Beauty Is In The Eye Of The Beholder.'},
// {phrase: 'You Can’t Have Your Cake And Eat It Too.'}
// ];

//adding a class game.
//creating constructors.
//creating phrases.

 class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
         {phrase: 'Hello world'},
         {phrase: 'Goodbye world'},
         {phrase: 'You lose'},
         {phrase: 'You win'},
         {phrase: 'Make lemonade'}
        ];
        this.activePhrase = null;
    } 

//get random phrase by using math.random and returning a number
    getRandomPhrase() {            
        let index = Math.floor(Math.random() * this.phrases.length);
        // console.log(this.phrases[index]);
        return this.phrases[index];  
    };

// hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
    startGame () {
        $('#overlay').hide();
        this.getRandomPhrase();
        let activePhrase = this.phrases;
        addPhraseToDisplay();
    };

// It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. 
    handleInteraction () {};

// this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. 
    removeLife() {};

// this method checks to see if the player has revealed all of the letters in the active phrase.
    checkForWin() {
        if () {
            return true;
        } else {
            return false;
        }
    };

// depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message.
    gameOver () {boolean};
 }
