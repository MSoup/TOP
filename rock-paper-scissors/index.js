// SCORES
let playerScore = 0;
let computerScore = 0;

// helpers
const CHOICES = ["rock", "paper", "scissors"];

const capitalize = function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const WIN_PAIRINGS = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
}

// query selectors
const displayResult = document.querySelector('.Display-Text');
const buttons = document.querySelectorAll('.rps-button');
const totals = document.querySelector('#totals');
const score = document.querySelector('#scoreboard');
const gameTitle = document.querySelector(".gameTitle");

// elements
const subTitle = document.createElement("h2");
const restartButton = document.createElement("button");
let conclusion = document.createElement('h2');

// computerPlay: generates rock, paper, or scissors
const computerPlay = function() {
    let choice = Math.floor(Math.random() * 3);
    return CHOICES[choice]    
}

// playRound: takes rock/paper/scissors for player and computer and returns result in string
const playRound = function(playerSelection) {
    let computerSelection = computerPlay();
    let choice = playerSelection.toLowerCase();

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

// append appropriate values to the buttons
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.value = CHOICES[i];
}

// event listener function to log the output of a single round
const buttonFunction = function(option) {
    return logEvent(playRound(option));
}

// add event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => 
    buttonFunction(button.value));
    });

restartButton.textContent = "Restart Game";
restartButton.classList = "rps-button";
restartButton.style.marginBottom = "10px";

// clears scores, removes the restart button, clears the display
restartButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    score.removeChild(restartButton);
    totals.textContent = "Score:";
    displayResult.textContent = "";
    });

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

// shows the restart button
const genRestart = function() {
    score.appendChild(restartButton);
}


const greeting = "Welcome to RPS!";

const genTitle = async() => {
    for (let i = 0; i < greeting.length; i++) {
        await sleep(70);
        gameTitle.textContent += greeting[i];
    }
    subTitle.textContent = "Choose your weapon:";
    gameTitle.parentNode.insertBefore(subTitle, gameTitle.nextSibling);
}

genTitle();