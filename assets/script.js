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

console.log(board.currentBoard);
const player1 = player("X");
const player2 = player("O");
