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

function playSingleRound(playerSelection, computerSelection) {
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
const playerSelection = 'rock';

playSingleRound(playerSelection, getComputerChoice());