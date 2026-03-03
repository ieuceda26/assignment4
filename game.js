/*
Rock Paper Scissors Game
Name: Isaac Euceda
Date: 03/02/2026
CSC 372-01
This JavaScript code implements a simple Rock Paper Scissors game. The player can select their choice by clicking on the corresponding image, and the computer will randomly select its choice after a short animation. The result of the game is displayed, and the player can choose to play again.
*/
const choices = ["rock", "paper", "scissors"];
let playerChoice = "";

let wins = 0;
let losses = 0;
let ties = 0;

const computerImage = document.getElementById("computer-image");
const resultText = document.getElementById("result-text");
const playAgainButton = document.getElementById("play-again");

document.querySelectorAll(".choices img").forEach(img => {
    img.addEventListener("click", () => startGame(img.id));
});

playAgainButton.addEventListener("click", resetGame);


function startGame(choice) {
    playerChoice = choice;
    highlight(choice);
    ComputerTurn();
}

function highlight(choice) {
    document.querySelectorAll(".choices img").forEach(img => img.classList.remove("selected"));

    document.getElementById(choice).classList.add("selected");
}

function ComputerTurn() {


    let interval = setInterval(() => {
        let random = Math.floor(Math.random() * 3);
        computerImage.src = "images/" + choices[random] + ".png";
    }, 500);

    setTimeout(() => {
        clearInterval(interval);

        let final = Math.floor(Math.random() * 3);
        let computerChoice = choices[final];
        computerImage.src = "images/" + computerChoice + ".png";

        let result = decide(playerChoice, computerChoice);
        resultText.textContent = result;
        updateScore(result);

    }, 3000);
}

function decide(player, computer) {

    if (player === computer) {
        return "Tie!";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    }

    return "You Lose!";
}


function resetGame() {
    resultText.textContent = "Make your move!";
    computerImage.src = "images/question-mark.png";

    document.querySelectorAll(".choices img").forEach(img => img.classList.remove("selected"));
}
