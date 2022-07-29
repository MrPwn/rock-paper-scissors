
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
    
    return computerChoice.textContent = choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase();
    let winMessage = '';

    if (computerSelection === playerLower) {
        return result.textContent = 'Play again, it\'s a tie!';
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
        ++computerWins;
        result.textContent = winMessage;
        return computerScore.textContent = `Computer Wins: ${computerWins}`; 
    } else {
        winMessage = `You Win! ${playerProper} beats ${computerProper}`
        ++playerWins;
        result.textContent = winMessage;
        return playerScore.textContent = `Player Wins: ${playerWins}`;
    }
}

function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        alert('You Win!')
        return;
    } else if (computerScore === 5) {
        alert('You Lose! :\'(')
        return;
    }
    return;
}

function game() {
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            checkWinner(playerWins, computerWins);
            playRound(button.id, getComputerChoice())
            return;
        });
    })
    //window.location.reload();
}

let playerWins = 0;
let computerWins = 0;

alert('First to 5 wins!')

const btn = document.querySelectorAll('button')
const container = document.querySelector('div')

const computerChoice = document.createElement('p')
const result = document.createElement('div')
const scores = document.createElement('div')
const playerScore = document.createElement('p')
const computerScore = document.createElement('p')

container.appendChild(computerChoice);
container.appendChild(result);
container.appendChild(scores);
scores.appendChild(playerScore);
scores.appendChild(computerScore);
    
game();