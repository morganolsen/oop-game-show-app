/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            'lorem ipsum',
            'the quick brown fox',
            'hello world',
            'javascript is the future',
            'welcome to the internet'
        ];
        this.activePhrase = null;
    }

    startGame(){
        const overlay = document.querySelector("#overlay");
        overlay.style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        const randomIndex = Math.ceil(Math.random() * 5) - 1;
        return this.phrases[randomIndex];
    }

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

    removeLife(){
        const firstHeart = document.querySelector('img[src="images/liveHeart.png"]');
        firstHeart.src = 'images/lostHeart.png';
        this.missed++;
        if(this.missed >= 5){
            this.gameOver();
        }
    }

    checkForWin(){
        const hiddenLetter = querySelectorAll("#phrase ul .hide");
        if(hiddenLetter.length > 0)
        {
            return false;
        }else{
            return true;
        }
    }

    gameOver(){
        const overlay = document.querySelector("#overlay");
        overlay.style.display = 'block';
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
    }
}