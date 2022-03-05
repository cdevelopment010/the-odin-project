const btn = document.getElementById('btn'); 
const board = [];
for (let i = 0; i < 9; i++) {
    board.push(''); 
}

//find empty spaces - use to check draw
function emptySpaces(){
    return board.filter(space => space == '').length;
}

// Find indexes of available spaces
function availableMoves() {
    let available = board.map((space,index) => {
        if (space == '')
        return index; 
    }).filter(space => space != undefined); 

    return available; 
}

// Use for 'dumb' bot
function randomMove() {
    let available = board.map((space,index) => {
        if (space == '')
        return index; 
    }).filter(space => space != undefined)

    let randomSpace = available[Math.floor(Math.random() * available.length)]
    
    return randomSpace; 

}


// Check winning arrays
function winner(marker) {
    let winningArr = [[0,1,2], 
                         [3,4,5], 
                         [6,7,8], 
                         [0,3,6], 
                         [1,4,7], 
                         [2,5,8], 
                         [0,4,8],
                         [2,4,6]
                        ];
    
    for (let i = 0; i < winningArr.length; i++){
        if (board[winningArr[i][0]] != '' && (board[winningArr[i][0]] == board[winningArr[i][1]] && board[winningArr[i][0]] == board[winningArr[i][2]])) {

            if (board[winningArr[i][0]] == marker) {
                return {
                    gameover: true, 
                    score: 1
                }; 

            } else {
                return {
                    gameover: true, 
                    score: -1

                }; 
            }
        }
    }

    if (emptySpaces() == 0) {
        return {
            gameover: true, 
            score: 0
        }; 
    }
    return {
        gameover: false, 
        // score: null
        score: 0
    }; 
}


function declareWinner(marker, score) {
    console.log(score); 
    switch (score) {
        case 1: 
            alert(`${marker} has won!`)
            return;
        case -1: 
            alert(`${marker} has lost!`)
            return; 
        default: 
            alert(`It is a draw!`)
    }
}



// The 'best' bot
function bestMove(marker) {
    let moves = availableMoves();
    let move; 

    if (moves.length == 9) {
        board[0] = marker; 
        return; 
    } 
    // highlight()
    move = minimax(board, moves.length , true, marker).index    
    board[move] = marker

}



function minimax(position, depth, maximise, marker) {
    let bestScore, currentScore, bestMove; 
    let opponentMarker = ['X', 'O'].filter(mark => mark != marker)[0]; 
    let availableSpaces = availableMoves(); 
    let moves = []
    let move; 
    let checkWinner = winner(marker);
    if (checkWinner.gameover || depth == 0 ) {
        let score = checkWinner.score >= 0 ? checkWinner.score - depth:  checkWinner.score - depth
        // let score = checkWinner.score == undefined ? 0 : checkWinner.score; 
        return {index: availableSpaces[0], score} ; 
    }
    if (availableSpaces.length > 0 ) {
        for (let i = 0; i < availableSpaces.length; i++) {
            // highlight(availableSpaces[i]); 
            move = {}
            move.index = availableSpaces[i]; 
            
            // console.log("tempboard:",  board); 
            if (!maximise) {
                board[availableSpaces[i]] = opponentMarker;
                currentScore= minimax(position, depth - 1 , true, marker)
                move.score = currentScore.score; 
            } else {
                board[availableSpaces[i]] = marker;
                currentScore = minimax(position, depth - 1 , false, marker)
                move.score = currentScore.score; 
            }
            board[availableSpaces[i]] = ''; 
            moves.push(move)
        }
    }

    if (maximise) {
        bestScore = Number.NEGATIVE_INFINITY; 
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score; 
                bestMove = i; 
            }
        }
    } else {
        bestScore = Number.POSITIVE_INFINITY; 
        for (let j = 0; j < moves.length; j++) {
            if (moves[j].score < bestScore) {
                bestScore = moves[j].score; 
                bestMove = j; 
            }
        }
    }

    // console.log("BestMove",moves[bestMove]); 
    return moves[bestMove]; 
}

function newScreen() {
    document.querySelector('.grid').innerHTML = ''; 
    board.forEach((cell,index) => {
        let box = document.createElement('div'); 
        box.id = `box-${index}`
        box.append(cell); 
        box.addEventListener('click', addMarker)
        document.querySelector('.grid').append(box)
    })
}

function updateScreen() {
    board.forEach((cell,index) => {
        document.querySelector('.grid').children[index].innerText = cell
    })
}

function addMarker() {
    let playerMarker = ['X','O'][playerTurn];
    if (this.innerText != '') {
        return;
    }
    let index = this.id.substring(this.id.length-1,this.id.length)
    console.log(this.id); 
    console.log(index); 
    board[index] = playerMarker; 
    updateScreen(); 
    if(winner(playerMarker).gameover) {
        declareWinner(playerMarker, winner(playerMarker).score); 
    } else {
        playerTurn = (playerTurn + 1) % 2; 
    }
}

function highlight() {
    let grid = document.querySelector('.grid');     
    let availableSpaces = availableMoves(); 
    let count = 0; 
    let totalCount = 0;  
    
    const interval = setInterval(() => {
        let prev = count > 1 ? count -1 : 0;
        if (count != 0 ){
            grid.children[availableSpaces[count]].classList.add('highlight');
            grid.children[availableSpaces[prev]].classList.remove('highlight');
        } else {
            grid.children[availableSpaces[availableSpaces.length-1]].classList.remove('highlight');
            grid.children[availableSpaces[count]].classList.add('highlight');
        }
        if (Math.pow((availableSpaces.length),2) == totalCount) {
            grid.children[availableSpaces[availableSpaces.length-1]].classList.remove('highlight');
            grid.children[availableSpaces[prev]].classList.remove('highlight'); 
            clearInterval(interval)
        } 

        count = (count + 1) % (availableSpaces.length); 
        totalCount++; 
    }, 10)

    if (count >= availableSpaces.length) {
        console.warn("SHOULD STOP!")
        clearInterval(interval)
    }
    

    // clearInterval(interval)
     
}

let playerTurn = 0; 

btn.addEventListener('click', () => {
    let playerMarker = ['X','O'][playerTurn];
    // if (playerTurn == 1) {
    //     board[randomMove()] = playerMarker;
    // } else {
    //     bestMove(playerMarker); 
    // }
    bestMove(playerMarker); 
    updateScreen(); 


    // alert(winner(marker).gameover); 
    if(winner(playerMarker).gameover) {
        declareWinner(playerMarker, winner(playerMarker).score); 
    }; 
    playerTurn = (playerTurn + 1) % 2; 
})

newScreen()