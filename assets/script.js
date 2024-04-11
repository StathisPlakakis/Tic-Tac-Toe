const board = (function () {
    let currentBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null], 
];
    return {
        currentBoard,
    }
})();

const game = (function () {
    const playGame = function () {
        console.log("Let's Play!!")
        console.log(board.currentBoard);

    }

    return {
        playGame,
    }
})()

function player(mark) {
    const markBoard = function (row, col) {
        if (board.currentBoard[row][col] === null) {
            board.currentBoard[row][col] = mark;
            console.log(board.currentBoard);
        }else {
            console.log("It's full");
            console.log(board.currentBoard);
        }
    }

    return {
        mark,
        markBoard,
    }
}

const player1 = player("X");
const player2 = player("O");
document.querySelector("button").addEventListener("click",game.playGame) 