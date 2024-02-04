function getComputerChoice(){
    const tools = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random() * tools.length);
    computerSelection = tools[randomIndex];
    console.log(computerSelection);
    return computerSelection;
};

let winner;

function playRound(playerSelection, computerSelection) { 
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')){
        winner = 'player';
        console.log(resultMessage = 'You win, ' + playerSelection + ' beats ' + computerSelection + '!');
        return winner; 
    }
    else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')){
        winner = 'computer';
        console.log('You lose, ' + computerSelection + ' beats ' + playerSelection + '!');
        return winner;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors')){
        winner = 'tie';
        console.log("It's a tie!");
        return winner;
    }
}

var playerScore = 0;
var computerScore = 0;

function game() {
    var computerSelection = getComputerChoice();
    var playerSelection = prompt('Please select your weapon: rock, paper, or scissors?');
    console.log(playerSelection);

    playRound(playerSelection, computerSelection);
    if (winner === 'player'){
        playerScore = playerScore + 1;
        console.log("The player's score is " + playerScore);
        console.log("The computer's score is " + computerScore);
    }
    else if (winner === 'computer') {
        computerScore = computerScore + 1;
        console.log("The player's score is " + playerScore);
        console.log("The computer's score is " + computerScore);
    }
    else {
        console.log("The player's score is " + playerScore);
        console.log("The computer's score is " + computerScore);
    }
}

while (playerScore != 5 && computerScore != 5){
    game();
}

if (playerScore === 5){
    console.log('Player wins!');
}
else if (computerScore === 5){
    console.log('Computer wins!');
}