/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Author: Morgan Olsen
 * app.js */



const startButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");

let game = null;

startButton.addEventListener("click", () => { 
    game = new Game(); 
    game.startGame();
});

keyboard.addEventListener("click", e => {
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
});

document.addEventListener("keydown", e => {
    const buttons = Array.from(document.querySelectorAll(".keyrow button"));
    const button = buttons.filter(button => button.textContent === e.key)[0];
    const overlay = document.querySelector("#overlay");
    if(button && overlay.style.display === 'none'){
        game.handleInteraction(button);
    }
});
