const CHOICES = ["rock", "paper", "scissors"];

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
        return `You Win! ${capitalize(choice)} beats ${capitalize(computerSelection)}`
    }
    // Player loses
    else if (WIN_PAIRINGS[computerSelection] == choice) {
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

const game = function() {
    for (let i = 0; i < 5; i++) {
        let userChoice = window.prompt("Select your weapon (rock/paper/scissors): ");
        console.log(playRound(userChoice, computerPlay()));
    }
}

game();