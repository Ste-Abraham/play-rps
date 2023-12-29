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
