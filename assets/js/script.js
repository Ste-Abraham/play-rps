/** variable statements follow **/

const choices = ["rock", "paper", "scissors"];
const resultOutput = document.getElementById('result');

/** Array statements will listen to users and computers choice which then goes to the getresult function **/

document.addEventListener("DOMContentLoaded", function () {
    arrayMethod();
});
function arrayMethod() {
    const resultDisplay = document.getElementById('your-result');
    const possibleChoices = document.getElementsByClassName('control');
    let computerChoice = document.getElementById('computers-result').innerText;
    Array.from(possibleChoices).forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        resultDisplay.innerHTML = userChoice;
        compChoice = generateComputerChoice();
        gameImages(userChoice, computerChoice);
        getResult();
    }));
}

/** This generates a random number for the computers choice **/

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoiceDisplay = document.getElementById('computers-result');
    computerChoiceDisplay.innerHTML = choices[randomNumber];
}

/** The below code uses logic to determine output of game as in Win, Lose or Draw **/

function getResult() {
    computerChoice = document.getElementById('computers-result').innerText;
    userChoice = document.getElementById('your-result').innerText;
    if (computerChoice === userChoice) {
        result = "It's a draw!";
        completeRound();
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You Win!";
        incrementUserScore();
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You lost!";
        incrementComputerScore();
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You Win!";
        incrementUserScore();
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You lost!";
        incrementComputerScore();
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You win!";
        incrementUserScore();
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You lost!";
        incrementComputerScore();
    }
    document.getElementById('result').innerHTML = result;
    toggleBackgroundColor();
}

/** The below code makes the image change in the game area to suit the player and computers choice **/

function gameImages(playerChoice, computerChoice) {
    playerChoice = document.getElementById("your-result").innerHTML;
    computerChoice = document.getElementById("computers-result").innerHTML;
    const playerImage = document.getElementById('player1-image');
    const computerImage = document.getElementById('computer-image');

    playerImage.src = `assets/images/${playerChoice}.png`;
    playerImage.alt = choices[userChoice];

    computerImage.src = `assets/images/${computerChoice}.png`;
    computerImage.alt = choices[computerChoice];
}

/** The below code updates Player1's score and increments it by 1 everytime you win a round **/

function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("player1score").innerText);
    document.getElementById("player1score").innerText = ++oldScore;
    completeRound();
}

/** The below code updates computers score and increments it by 1 everytime they win a round **/

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computerscore").innerText);
    document.getElementById("computerscore").innerText = ++oldScore;
    completeRound();

}

/** The below code makes the rock paper scissors game best out of 7 - and gives a message to announce winner at the end of the game **/

function limitGameToBestOutOfNine() {
    let score = parseInt(document.getElementById("player1score").innerText);
    let mistakes = parseInt(document.getElementById("computerscore").innerText);


    if (score > mistakes) {
        alert('Congrats Player1 has won the game!');
    } else if (mistakes > score) {
        alert('Congrats computer has won the game!');
    } else {
        alert('It\'s a tie!');
    }
}

function completeRound() {
    let userScore = parseInt(document.getElementById("player1score").innerText);
    let computerScore = parseInt(document.getElementById("computerscore").innerText);


    if ((userScore + computerScore) == 7) {
        limitGameToBestOutOfNine();
        resetScore();
    }

}