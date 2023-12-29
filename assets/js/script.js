/** variable statements follow **/

const choices = ["rock", "paper", "scissors"];
const resultOutput = document.getElementById('result');

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