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


const computerPlay = function() {
    let choice = Math.floor(Math.random() * 3);
    return CHOICES[choice]    
}



const playRound = function(playerSelection, computerSelection) {
    let choice = playerSelection.toLowerCase();
    // Player wins
    if (WIN_PAIRINGS[choice] == computerSelection) {
        playerScore += 1;
        return `You Win! ${capitalize(choice)} beats ${capitalize(computerSelection)}`
    }
    // Player loses
    else if (WIN_PAIRINGS[computerSelection] == choice) {
        computerScore += 1;
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(choice)}`

    }
    // Tie
    else if (choice == computerSelection) {
        return "Tie!"
    }
    else {
        return "Error happened somewhere in my logic"
    }
}

const capitalize = function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const container = document.querySelector('#container');

// Make 3 buttons - Rock Paper Scissors
for (let i = 0; i < 3; i++) {
    var option = document.createElement('button');
    option.innerHTML = capitalize(CHOICES[i]);
    option.classList.add('rps-options');
    option.value = CHOICES[i];
    container.appendChild(option);
}

// Select all buttons and add event listeners to them
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return logEvent(playRound(button.value, computerPlay()));
    });
});

const scoreboard = document.querySelector('#scoreboard');
const totals = document.querySelector('#totals');

// function that logs outcome of button being pressed
const logEvent = function(stringLog) {
    var score = document.createElement('p');
    // p generated with outcome of playRound (stringLog)
    score.textContent = stringLog;
    scoreboard.appendChild(score);
    // display totals in heading 
    totals.textContent = "Score: You: " + playerScore + " Computer: " + computerScore;
    if (playerScore == 5) {
        var conclusion = document.createElement('h2');
        conclusion.textContent = "You win. Game over."
        scoreboard.appendChild(conclusion);
    }
    else if (computerScore == 5) {
        var conclusion = document.createElement('h2');
        conclusion.textContent = "You lose. Game over."
        scoreboard.appendChild(conclusion);        
    }
}
