// Initialization of varialbe
const roll = document.getElementById('roll');
const text = document.querySelector('.text');
const dice1 = document.querySelector('.player1 img');
const dice2 = document.querySelector('.player2 img');
 
// roll the dice on click
roll.addEventListener('click', function () {
    // adding animation class 
    dice1.classList.add("anime");
    dice2.classList.add("anime");

    setTimeout(function () {
        // generating first dice
        let player1 = Math.floor(Math.random() * 6) + 1;
        let diceImage1 = "images/dice" + player1 + ".png"
        dice1.src = diceImage1;

        // generating second dice
        let player2 = Math.floor(Math.random() * 6) + 1;
        let diceImage2 = "images/dice" + player2 + ".png"
        dice2.src = diceImage2;

        if (player1 == player2) {
            text.innerHTML = "Draw!"
        }
        else if (player1 > player2) {
            text.innerHTML = "Player 1 Win 🚩"
        }
        else if (player2 > player1) {
            text.innerHTML = "Player 2 Win 🚩"
        }

        // removing animation class
        dice1.classList.remove("anime");
        dice2.classList.remove("anime");
    }, 2000)
})