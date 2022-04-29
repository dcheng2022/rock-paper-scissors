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

// Create game function 
function game() {
    // Initialize computerScore integer variable
    let computerScore = 0;
    // Inititalize playerScore integer variable 
    let playerScore = 0;
    // Create for loop inside function to play five rounds 
    while (true) {
        // Initialize local variable playerSelection and assign it the inputValidation function
        const playerSelection = inputValidation();
        // Initialize variable computerSelection and assign it the computerPlay function 
        const computerSelection = computerPlay();
        // create switch statement with playRound() as the expression
        switch (playRound(playerSelection, computerSelection)) {
            // If playRound returns "win" increment playerScore 
            case "win":
                playerScore++;
                break;
            // If playRound returns "lose" increment computerScore
            case "lose":
                computerScore++;
                break;
        }
    }
    // If playerScore > computerScore, log "You won the best out of 5!"
    if (playerScore > computerScore) {
        console.log(`You won the best out of 5 by ${playerScore - computerScore}!`);
        // If playerScore < computerScore, log "The computer won the best out of 5!"
    } else if (playerScore < computerScore) {
        console.log(`You lost the best out of 5 by ${computerScore - playerScore}!`);
        // If playerScore === computerScore, log "No one wins! Try again?"
    } else {
        console.log("No one wins! Thanks for playing!");
    }
}

// Alert user that they are about to play a game
alert('You are about to play a game of rock, paper, scissors against a computer.');

game();