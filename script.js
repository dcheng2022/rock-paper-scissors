// Create computerPlay function 
function computerPlay() {
    // Initialize integer variable 
    let randomNum;
    // Generate random number from 1 to 3 
    randomNum = Math.floor(Math.random() * 3 + 1);
    //console.log(randomNum);
    // Create switch statement
    switch (randomNum) {
        // If variable is 1, return rock
        case 1: 
            return "rock";
        // If variable is 2, return paper
        case 2:
            return "paper";
        // If variable is 3, return scissors
        case 3:
            return "scissors";
        // No default case   
    }
}

// Create playRound function with two parameters, playerSelection and computerSelection 
function playRound(playerSelection, computerSelection) {
    // Initialize winMessage string variable
    const winMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`; 
    // Initialize loseMessage string variable
    const loseMessage = `You lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    // Create if-else statement comparing all possible values of playerSelection and computerSelection
    // Log appropriate message to the console
    // Return string "win", "lose", "tie"
    if (playerSelection === computerSelection) {
        console.log("You tied the round!");
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(winMessage);
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(loseMessage);
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(winMessage);
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(loseMessage);
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(loseMessage);
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(winMessage);
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
            console.log(`You won the best out of 5 by ${playerScore - computerScore}!`);
        } else{
            console.log(`You lost the best out of 5 by ${computerScore - playerScore}!`);
        }
    }
}

const body = document.querySelector('body');
const div = document.createElement('div');
body.insertBefore(div, buttons[0]);