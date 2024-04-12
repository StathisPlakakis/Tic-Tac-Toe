const board = (function () {
    let currentBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null], 
];

    const checkWinner = function (mark) {
        if (currentBoard[0][0] === mark && 
            currentBoard[0][1] === mark &&       
            currentBoard[0][2] === mark ) {
                return true;
            }
        if (currentBoard[1][0] === mark && 
            currentBoard[1][1] === mark &&       
            currentBoard[1][2] === mark ) {
                return true;
            }
        if (currentBoard[2][0] === mark && 
            currentBoard[2][1] === mark &&       
            currentBoard[2][2] === mark ) {
                return true;
            }
        if (currentBoard[0][0] === mark && 
            currentBoard[1][0] === mark &&       
            currentBoard[2][0] === mark ) {
                return true;
            }
        if (currentBoard[0][1] === mark && 
            currentBoard[1][1] === mark &&       
            currentBoard[2][1] === mark ) {
                return true;
            }      
        if (currentBoard[0][2] === mark && 
            currentBoard[1][2] === mark &&       
            currentBoard[2][2] === mark ) {
                return true;
            }    
        if (currentBoard[0][0] === mark && 
            currentBoard[1][1] === mark &&       
            currentBoard[2][2] === mark ) {
                return true;
            } 
        if (currentBoard[0][2] === mark && 
            currentBoard[1][1] === mark &&       
            currentBoard[2][0] === mark ) {
                return true;
            }      
        return false; 
    }

    const checkDraw = function () {
        const first = currentBoard[0].includes(null);
        const second = currentBoard[1].includes(null);
        const third = currentBoard[2].includes(null);
        if (first === false && second === false && third === false) {
            return true;
        }
        return false;

    }

    return {
        currentBoard,
        checkWinner,
        checkDraw,
    }
})();

function player(name,mark) {
    const markBoard = function (row, col) {
        if (board.currentBoard[row][col] === null) {
            board.currentBoard[row][col] = mark;
            alert(board.currentBoard);
        }
    }

    return {
        name,
        mark,
        markBoard,
    }
}

const game = (function () {
    const playGame = function () {
        console.log("Let's Play!!")
        console.log(board.currentBoard);

        const human = player("Human", "X");
        const computer = player("Computer", "O");
        let plays = human;
        let gameActive = true;
        let winner = null;
        const action = function (plays, row, col) {
            plays.markBoard(row, col);            
            if (board.checkWinner(plays.mark)) {
                winner = plays;
                gameActive = false;
            }else if (board.checkDraw()) {
                gameActive = false;

            }
            
        };

        while (gameActive) {
            console.log(`${plays.name} plays`);
            if (plays === human) {
                let row = prompt("row: ");
                let col = prompt("col: ");
                while (board.currentBoard[row][col] !== null) {
                    alert("This cell is full pick another")
                    row = prompt("row: "); 
                    col = prompt("col: ");
               }
                action(plays, row,col);
                plays = computer;
            }else {
                let row = Math.floor(Math.random() * 3);
                let col = Math.floor(Math.random() * 3);
                while (board.currentBoard[row][col] !== null) {
                     row = Math.floor(Math.random() * 3);
                     col = Math.floor(Math.random() * 3);
                }
                action(plays, row,col);
                plays = human;

            }
        }

        console.log(winner);

    }

    return {
        playGame,
    }
})()




document.querySelector("button").addEventListener("click",
game.playGame) 


