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
        return winMessage = 'It\'s a tie!';
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
    
    console.log(computerSelection);
    console.log(winMessage);
}
const playerSelection = 'Rock';

playSingleRound(playerSelection, getComputerChoice());