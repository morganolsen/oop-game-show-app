/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseArray = this.phrase.split('');
     }

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

     checkLetter(letter){
        if(this.phraseArray.filter(character => character === letter.toLowerCase()).length > 0){
            return true;
        }else{
            return false;
        }
     }

     showMatchedLetter(letter){
        this.phraseArray.filter(character => character === letter.toLowerCase()).forEach(character => {
            const li = document.querySelector(`.letter .${character}`);
            li.className = `show letter ${character}`;
        });
     }
 }