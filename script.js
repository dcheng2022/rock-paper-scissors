let computerScore = 0;
let playerScore = 0;
let tieScore = 0;
const buttons = document.querySelectorAll('button'); 
buttons.forEach(button => button.addEventListener('click', () => scoreCheck(button.id)))
const body = document.querySelector('body');
const logDiv = document.querySelector('.log');
const scoreDiv = document.querySelector('.score');

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
    const winMessage = `You won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} wins against ${computerSelection}.`; 
    const loseMessage = `You lost! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} loses against ${computerSelection}.`;
    // Return string "win", "lose", "tie"
    if (playerSelection === computerSelection) {
        logDiv.textContent = "You tied the round!";
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        logDiv.textContent = winMessage;
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        logDiv.textContent = winMessage;
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        logDiv.textContent = winMessage;
        return "win";
    } else {
        logDiv.textContent = loseMessage;
        return "lose";
    }
}

function scoreCheck(move) {
    switch(playRound(move, computerPlay())) {
        case "win": 
            playerScore++;
            break;
        case "lose":
            computerScore++;
            break;
        case "tie":
            tieScore++;
    }
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            logDiv.textContent = `Congrats! You won the best out of 5 by ${playerScore - computerScore} and tied on ${tieScore}.`;
        } else{
            logDiv.textContent = `Better luck next time! You lost the best out of 5 by ${computerScore - playerScore} and tied on ${tieScore}.`;
        }
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
    }
    scoreDiv.textContent = `W:L:T [${playerScore}: ${computerScore}: ${tieScore}]`;
}
