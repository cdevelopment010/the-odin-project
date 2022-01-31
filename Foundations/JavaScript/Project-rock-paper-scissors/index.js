const btnRock = document.getElementById('rock'); 
const btnPaper = document.getElementById('paper'); 
const btnScissors = document.getElementById('scissors'); 
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const winner = document.getElementById('winner'); 
const roundResult = document.getElementById('round-result'); 
const resetBtn = document.getElementById('reset-btn');

btnRock.addEventListener('click', playRound); 
btnPaper.addEventListener('click', playRound); 
btnScissors.addEventListener('click', playRound); 


// Computer function for the computer to randomly select rock, paper or scissors 
function computerSelection() {
    let arr = ['Rock', 'Paper', 'Scissors']; 
    return arr[Math.floor(Math.random() * arr.length)];
}


// Play round which checks who has won
function playRound() {
    roundResult.innerText = '';
    let arr = ['Rock', 'Paper', 'Scissors']; 
    let computer = computerSelection(); 
    // let player = playerSelection; 

    let player = this.innerText; 
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
        roundResult.innerText = `It's a draw! ${player} draws with ${computer}`;
        return `It's a draw! ${player} draws with ${computer}`;
    }

    for (let win of winArray) {
        if (player == win[0] && computer ==win[1]){
            playerScore.children[0].innerText++; 
            roundResult.innerText = `Player wins the round - ${player} beats ${computer}`;
            checkWinner(); 
            return; 
        }
    }
    
    computerScore.children[0].innerText++; 
    roundResult.innerText = `Computer wins the round - ${computer} beats ${player} `;
    checkWinner(); 

}

function checkWinner() {
    if (playerScore.children[0].innerText == 5 || computerScore.children[0].innerText == 5) {
        resetBtn.classList.toggle('hidden'); 
        winner.classList.toggle('hidden'); 
        btnRock.removeEventListener('click', playRound); 
        btnPaper.removeEventListener('click', playRound);
        btnScissors.removeEventListener('click', playRound); 

        if (computerScore.children[0].innerText == 5) {
            winner.innerText = `Computer wins! Better luck next time.`;
        } else {
            winner.innerText = `You win! Congrats! Rematch?`; 
        }
    } 

}

resetBtn.addEventListener('click', function() {
    computerScore.children[0].innerText = 0; 
    playerScore.children[0].innerText = 0; 
    winner.innerHTML = ''; 
    roundResult.innerText = '';

    resetBtn.classList.toggle('hidden'); 
    winner.classList.toggle('hidden'); 

    btnRock.addEventListener('click', playRound); 
    btnPaper.addEventListener('click', playRound); 
    btnScissors.addEventListener('click', playRound); 
})