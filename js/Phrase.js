/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Author: Morgan Olsen
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseArray = this.phrase.split('');
    }

    /***
     * Creates the empty boxes and spaces for each character in the chosen phrase.
     */
    addPhraseToDisplay(){
        const phraseDisplayUL = document.querySelector("#phrase ul");
        this.phraseArray.forEach(character => {
            const li = document.createElement("li");
            if(character == ' ')
            {
                li.className = 'space';
            }else{
                li.className = `hide letter ${character}`;
            }
            li.textContent = character;
            phraseDisplayUL.appendChild(li);
        });
    }

    /***
     * Checks whether a letter is a part of the chosen phrase or not
     * 
     * @param {string} letter - The letter to check
     * @returns {boolean} - True if the letter is in the chosen phrase, false if not
     */
    checkLetter(letter){
        if(this.phraseArray.filter(character => character === letter.toLowerCase()).length > 0){
            return true;
        }else{
            return false;
        }
    }

    /***
     * Shows any occurences of the matched letter for the user.
     * 
     * @param {string} letter - The letter to show
     */
    showMatchedLetter(letter){
        const lis = document.querySelectorAll(`ul .${letter}`);
        lis.forEach(li => li.className = `show letter ${letter}`);
    }
}