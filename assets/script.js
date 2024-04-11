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



console.log(board.currentBoard);