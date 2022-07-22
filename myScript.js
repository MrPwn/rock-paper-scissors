function getComputerChoice() {
    let choice = "";
    let number = Math.floor(Math.random()*100);

    if (number <= 33) {
        choice = 'Rock';
    } else if(number <= 66) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
    
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();
    let winMessage = '';

    if (computerSelection === playerLower) {
        return winMessage = 'Play again, it\'s a tie!';
    }
    
    switch (computerSelection) {

        case 'rock':
            winMessage = (playerLower === 'scissors') ? 'pc wins' : 'you win';
            break;
        
        case 'scissors':
            winMessage = (playerLower === 'paper') ? 'pc wins' : 'you win';
            break;
        
        case 'paper':
            winMessage = (playerLower === 'rock') ? 'pc wins' : 'you win';
            break;
    }
    
    let playerProper = (playerLower.substr(0,1)).toUpperCase() + playerLower.substr(1);
    let computerProper = (computerSelection.substr(0,1)).toUpperCase() + computerSelection.substr(1);
    
    if (winMessage === 'pc wins') {
        return winMessage = `You Lose! ${computerProper} beats ${playerProper}`; 
    } else {
        return winMessage = `You Win! ${playerProper} beats ${computerProper}`;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++){
        let winner = playRound(playerSelection, getComputerChoice());
        if (winner.substr(0,7) === 'You Win') {
            playerWins++;
        } else {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        return 'You are the Rock Paper Scissors ULTIMATE CHAMPION!';
    } else {
        return 'You are terrible! Try again next time.'
    }
}

game();