function computerPlay() { 
    // Generate random number from 1 to 3 
    const randomNum = Math.floor(Math.random() * 3 + 1);
    switch (randomNum) {
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const winMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`; 
    const loseMessage = `You lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    // Return string "win", "lose", "tie"
    if (playerSelection === computerSelection) {
        div.textContent = "You tied the round!";
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        div.textContent = winMessage;
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        div.textContent = loseMessage;
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        div.textContent = winMessage;
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        div.textContent = loseMessage;
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        div.textContent = loseMessage;
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        div.textContent = winMessage;
        return "win";
    } 
}

let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button'); 
buttons.forEach(button => button.addEventListener('click', () => scoreCheck(button.id)))

function scoreCheck(move) {
    switch(playRound(move, computerPlay())) {
        case "win": 
            playerScore++;
            break;
        case "lose":
            computerScore++;
            break;
    }
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            div.textContent = `You won the best out of 5 by ${playerScore - computerScore}!`;
        } else{
            div.textContent = `You lost the best out of 5 by ${computerScore - playerScore}!`;
        }
    }
}

const body = document.querySelector('body');
const div = document.createElement('div');
body.insertBefore(div, buttons[0]);