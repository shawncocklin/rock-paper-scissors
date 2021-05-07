
let playerScore = 0;
let computerScore = 0;

function computerPlay () {

  const actions = ["rock", "paper", "scissors"];
  const randomAction = Math.floor(Math.random() * actions.length);
  return actions[randomAction];

}

function playRound(playerSelection, computerSelection) {

  if(playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Rock beats scissors. You win! Score: " + playerScore + " to " + computerScore + ".";
  }
  else if(playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "Paper beats rock. You lose! Score: " + playerScore + " to " + computerScore + "."; 
  }
  else if(playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "Scissors beats paper. You lose! Score: " + playerScore + " to " + computerScore + ".";
  }
  else if(playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Paper beats rock. You win! Score: " + playerScore + " to " + computerScore + ".";
  }
  else if(playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "Rock beats scissors. You lose! Score: " + playerScore + " to " + computerScore + ".";
  }
  else if(playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Scissors beats paper. You win! Score: " + playerScore + " to " + computerScore + ".";
  }
  else {
    return "It's a draw! Score: " + playerScore + " to " + computerScore + ".";
  }
  
}

function game(numberOfRounds) {

  for (let i = 0; i < numberOfRounds; i++) {
    const computerSelection = computerPlay();
    let playerSelection = prompt("Rock-paper-scissors?");
    console.log(playRound(playerSelection, computerSelection))

  }
  if(playerScore > computerScore) {
    console.log("You win! Final score: " + playerScore + " to " + computerScore + ".");
  }
  else if(computerScore > playerScore) {
    console.log("You lose! Final score: " + playerScore + " to " + computerScore + ".");
  }
  else {
    console.log("It's a draw! Please play again!");
  }
  
}

game(5);


