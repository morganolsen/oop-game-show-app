/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Author: Morgan Olsen
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('lorem ipsum'),
            new Phrase('the quick brown fox'),
            new Phrase('hello world'),
            new Phrase('javascript is the future'),
            new Phrase('welcome to the internet')
        ];
        this.activePhrase = null;
    }

    /***
     * Removes the "start game" overlay and initiates the game
     */
    startGame(){
        const overlay = document.querySelector("#overlay");
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /***
     * Selects a random phrase from the this.phrases array.
     * 
     * @returns {string} - The random phrase selected.
     */
    getRandomPhrase(){
        const randomIndex = Math.ceil(Math.random() * this.phrases.length) - 1;
        return this.phrases[randomIndex];
    }

    /***
     * Is called when player pushes a button.
     * Disables the button pressed and checks whether the letter matches the phrase.
     * Also checks if the player has ran out of lives.
     * 
     * @param {object} target - The target element that was clicked.
     */
    handleInteraction(target){
        const letter = target.textContent;
        target.disabled = true;
        if(this.activePhrase.checkLetter(letter))
        {
            target.className += ' chosen';
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin())
            {
                this.gameOver();
            }
        }else{
            target.className += ' wrong';
            this.removeLife();
        }
    }

    /***
     * Removes a life from the player and displays it by "disabling" a heart.
     */
    removeLife(){
        const firstHeart = document.querySelector('img[src="images/liveHeart.png"]');
        if(firstHeart){
            firstHeart.src = 'images/lostHeart.png';
        }
        this.missed++;
        if(this.missed >= 5){
            this.gameOver();
        }
    }

    /***
     * Checks if the player has filled out all the empty boxes.
     * 
     * @returns {boolean} - True if the player has won. False if not.
     */
    checkForWin(){
        const hiddenLetter = document.querySelectorAll("#phrase ul .hide");
        if(hiddenLetter.length > 0)
        {
            return false;
        }else{
            return true;
        }
    }

    /***
     * Ends the game and displays an end screen depending on whether the player
     * lost or won the game.
     */
    gameOver(){
        const overlay = document.querySelector("#overlay");
        overlay.style.display = 'flex';
        const h1 = overlay.querySelector('h1');
        if(this.checkForWin()){
            overlay.className = 'win';
            //h1.style.color = 'green';
            h1.textContent = "Congratulations! You won!";
        }else{
            overlay.className = 'lose';
            //h1.style.color = 'red';
            h1.textContent = "Game Over. Better luck next time.";
        }
        this.resetGame();
    }

    /***
     * Resets all the parts of the game in order for a new game to be started.
     */
    resetGame(){
        document.querySelector("#phrase ul").innerHTML = '';
        const keys = document.querySelectorAll(".keyrow button");
        keys.forEach(key => {
            key.disabled = false;
            key.className = 'key';
        });
        const images = document.querySelectorAll(".tries img");
        images.forEach(image => {
            image.src = 'images/liveHeart.png';
        });
        this.missed = 0;
    }
}