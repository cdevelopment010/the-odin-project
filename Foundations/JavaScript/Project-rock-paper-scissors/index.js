// Default player value
const playerSelection = 'ROCK'; 

// Computer function for the computer to randomly select rock, paper or scissors 
function computerSelection() {
    let arr = ['Rock', 'Paper', 'Scissors']; 
    return arr[Math.floor(Math.random() * arr.length)];
}


// Play round which checks who has won
function playRound(playerSelection, computerSelection) {
    let arr = ['Rock', 'Paper', 'Scissors']; 
    let computer = computerSelection(); 
    // let player = playerSelection; 


    // Use prompt to get the user input
    let player = prompt(`Choose your weapon - Rock, Paper or Scissors?`);

    //check case of player selection
    player = player[0].toUpperCase() + player.slice(1).toLowerCase();
    
    // check if player has selected rock, paper or scissors - if incorrect restart.
    if (arr.indexOf(player) == -1) {
        alert("Please select either rock, paper or scissors."); 
        return `Please try again.`; 
    }

    // winning array
    let winArray = [
        ['Rock', 'Scissors'], 
        ['Paper', 'Rock'],
        ['Scissors', 'Paper']
    ]; 

    // Check who has won
    if (player === computer) {
        return `It's a draw! ${player} draws with ${computer}`
    }

    for (let win of winArray) {
        if (player == win[0] && computer ==win[1]){
            return `You win! ${player} beats ${computer}`
        }
    }
    return `You lose! ${computer} beats ${player}`;

}



// function game
//This is a best of 5 game that uses the playRound function
    //Print result from each round
    //Declare the winner at the end

function game() {
    let count = 0; 
    let playerVictory = 0;
    let computerVictory = 0; 

    while (count <= 4) {

        console.log(`Game number ${count}`);
        let result = playRound(playerSelection, computerSelection); 
        console.log(result); 

        if (result == 'Please try again.') {
            continue;
        }

        if (result.indexOf('You win!')!= -1) {
            playerVictory++; 

        } else if (result.indexOf('You lose!')!= -1) {
            computerVictory++
        } 

        console.log(`Player: ${playerVictory} \nComputer: ${computerVictory}`);

        count++; 
        // first to 3 wins
        if (computerVictory >= 3 || playerVictory >= 3) {
            break; 
        }
    }
    return `Player wins ${playerVictory} games and computer wins ${computerVictory} games.`
}