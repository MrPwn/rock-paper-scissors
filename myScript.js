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
    
    console.log(choice);
}

getComputerChoice();