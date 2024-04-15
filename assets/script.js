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



const display = (function () {
    const container = document.createElement("div");
    container.style.width = "450px";
    container.style.height = "450px";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "1fr 1fr 1fr";
    container.style.gridAutoRows = "150px";
    document.body.appendChild(container);


    const render = function () {
        container.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const cell = document.createElement("div");
                cell.style.backgroundColor = "lightblue";
                cell.style.border = "1px solid";
                cell.style.textAlign = "center";
                cell.setAttribute("i", i);
                cell.setAttribute("j", j);
                cell.addEventListener("click", (e) => {
                    if (game.isActive) {
                        const pickRow = e.target.getAttribute("i");
                        const pickCol = e.target.getAttribute("j");
                        
                        if (board.currentBoard[pickRow][pickCol] === null) {
                            board.currentBoard[pickRow][pickCol] = "X";
                            render();
                            game.endGame("X");
                            if (game.isActive) {
                                let row = Math.floor(Math.random() * 3);
                                let col = Math.floor(Math.random() * 3);
                                while (board.currentBoard[row][col] !== null) {
                                     row = Math.floor(Math.random() * 3);
                                     col = Math.floor(Math.random() * 3);
                                }
                                board.currentBoard[row][col] = "O";
                                render();
                                game.endGame("O");
                            }else {
                                console.log(game.winner)
                            }
                        }
                    }else {
                        console.log(game.winner)
                    }
                      
                    
                })
                if (board.currentBoard[i][j] === null) {
                    cell.textContent = "";
                }else if (board.currentBoard[i][j] === "X") {
                    cell.textContent = "X";
                }else {                    
                    cell.textContent = "O";                
                }
                container.appendChild(cell);
            } 
        }   
    }
    return {
        render,
    }
})();

const game = (function () {
    let isActive = true;
    let winner;

    const endGame = function (mark) {
        if (board.checkWinner(mark)) {
            game.winner = mark;
           game.isActive = false;
        }else if (board.checkDraw()) {
            game.winner = null;
            game.isActive = false;
        }
    }

    return {
        isActive,
        winner,
        endGame,
    }
})()


display.render()




