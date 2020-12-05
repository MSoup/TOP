// SCORES
let playerScore = 0;
let computerScore = 0;

// helpers
const CHOICES = ["rock", "paper", "scissors"];

// helpers (makes comparison logic cleaner)
const WIN_PAIRINGS = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
}

// computerPlay: generates rock, paper, or scissors
const computerPlay = function() {
    let choice = Math.floor(Math.random() * 3);
    return CHOICES[choice]    
}

const displayResult = document.querySelector('.Display-Text');

displayResult.textContent = "Test";

const capitalize = function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// playRound: takes rock/paper/scissors for player and computer and returns result in string
const playRound = function(playerSelection) {
    let computerSelection = computerPlay();
    let choice = playerSelection.toLowerCase();

    //debugging
    console.log("You chose " + playerSelection);
    console.log(computerSelection);
    // Player wins
    if (WIN_PAIRINGS[choice] == computerSelection) {
        playerScore += 1;
        displayResult.textContent = `You Win! :) ${capitalize(choice)} beats ${capitalize(computerSelection)}`
        console.log(displayResult.textContent);

    }
    // Player loses
    else if (WIN_PAIRINGS[computerSelection] == choice) {
        computerScore += 1;
        displayResult.textContent = `You Lose! AI chose ${capitalize(computerSelection)}. ${capitalize(computerSelection)} beats ${capitalize(choice)}`
        console.log(displayResult.textContent);
    }
    // Tie
    else {
        displayResult.textContent = "Tie!";
        console.log(displayResult.textContent);

    }
}

// Select all buttons
const buttons = document.querySelectorAll('.rps-button');

// append appropriate values to the buttons
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.value = CHOICES[i];
}

// function to log the output of a single round
const buttonFunction = function(option) {
    return logEvent(playRound(option));
}

// add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => 
    buttonFunction(button.value));
    });

const totals = document.querySelector('#totals');
const restartButton = document.createElement("button");
restartButton.textContent = "Restart Game";
restartButton.classList = "rps-button";
restartButton.style.marginBottom = "10px";

restartButton.addEventListener('click', () => {
playerScore = 0;
computerScore = 0;
score.removeChild(restartButton);
totals.textContent = "Score:";
console.log(displayResult.childNodes);
displayResult.textContent = "";
}
);

let conclusion = document.createElement('h2');

// function that logs outcome of button being pressed
const logEvent = function(stringLog) {
    totals.textContent = "Score: You: " + playerScore + " Computer: " + computerScore;
    if (playerScore == 5) {
        conclusion.textContent = "You win. Game over."
        displayResult.appendChild(conclusion);
        genRestart();
    }
    else if (computerScore == 5) {
        conclusion.textContent = "You lose. Game over."
        displayResult.appendChild(conclusion);
        genRestart();
    }
}

const score = document.querySelector('#scoreboard');

const genRestart = function() {
    score.appendChild(restartButton);
}