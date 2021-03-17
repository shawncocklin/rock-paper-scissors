const computerSelection = computerPlay();
const playerSelection = window.prompt("Rock-paper-scissors?");
const playerScore = 0;
const computerScore = 0;

function computerPlay () {

  const actions = ["rock", "paper", "scissors"];
  const randomAction = Math.floor(Math.random() * actions.length);
  return actions[randomAction];

}

function playRound(playerSelection, computerSelection) {

  let resultOfRound = "";
  
  //change these to check player input first instead of the computer selection
  if(computerSelection === "rock") {
    if(playerSelection === "rock"){
      resultOfRound = "Rock does nothing to rock. It's a draw!";
    }
    else if (playerSelection === "paper") {
      resultOfRound = "Paper beats rock. You win!";
      playerScore++;
    }
    else if(playerSelection === "scissors") {
      resultOfRound = "Rock beats scissors. You lose!";
      computerScore++;
    }
  }

  if(computerSelection === "paper") {
    if(playerSelection === "rock"){
      resultOfRound = "Rock beats paper. You lose!";
      computerScore++;
    }
    else if (playerSelection === "paper") {
      resultOfRound = "Paper does nothing to paper. It's a draw!";
    }
    else if(playerSelection === "scissors") {
      resultOfRound = "Scissors beats paper. You win!";
      playerScore++;
    }
  }

  if(computerSelection === "scissors") {
    if(playerSelection === "rock"){
      resultOfRound = "Rock beats scissors. You win!";
      playerScore++;
    }
    else if (playerSelection === "paper") {
      resultOfRound = "Scissors beats paper. You lose!";
      computerScore++;
    }
    else if(playerSelection === "scissors") {
      resultOfRound = "Scissors does nothing to scissors. It's a draw!";
    }
  }

  return resultOfRound;

  
}

function game() {

  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  
}




game();


