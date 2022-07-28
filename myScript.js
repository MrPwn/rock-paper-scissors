const btn = document.querySelectorAll('button')

btn.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice())
    });
})

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
        winMessage = `You Lose! ${computerProper} beats ${playerProper}`
        return console.log(winMessage); 
    } else {
        winMessage = `You Win! ${playerProper} beats ${computerProper}`
        return console.log(winMessage); 
    }
}

/*function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('What\'s your selection?');
        let winner = playRound(playerSelection, getComputerChoice());

        console.log(winner);

        if (winner.substr(0,7) === 'You Win') {
            playerWins++;
        } else if (winner.substr(0,8) === 'You Lose'){
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        return console.log('You are the Rock Paper Scissors ULTIMATE CHAMPION!');
    } else if (playerWins < computerWins) {
        return console.log('You are terrible! Try again next time.');
    } else {
        return console.log('Well would you look at what we have here! It\'s a tie.');
    }
}

game();*/