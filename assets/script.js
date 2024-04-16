const board = (function () {
    let currentBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null], 
];

    const reset = function () {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                board.currentBoard[i][j] = null;
            }
        }
    }

    const checkWinner = function (mark) {

        if (currentBoard[0][0] === mark && 
            currentBoard[0][1] === mark &&       
            currentBoard[0][2] === mark ) {
                currentBoard[0][0] = `W${mark}`;
                currentBoard[0][1] = `W${mark}`;
                currentBoard[0][2] = `W${mark}`;
                return true;
            }
        if (currentBoard[1][0] === mark && 
            currentBoard[1][1] === mark &&       
            currentBoard[1][2] === mark ) {
                currentBoard[1][0] = `W${mark}`;
                currentBoard[1][1] = `W${mark}`;
                currentBoard[1][2] = `W${mark}`;
                return true;
            }
        if (currentBoard[2][0] === mark && 
            currentBoard[2][1] === mark &&       
            currentBoard[2][2] === mark ) {
                currentBoard[2][0] = `W${mark}`;
                currentBoard[2][1] = `W${mark}`;
                currentBoard[2][2] = `W${mark}`;
                return true;
            }
        if (currentBoard[0][0] === mark && 
            currentBoard[1][0] === mark &&       
            currentBoard[2][0] === mark ) {
                currentBoard[0][0] = `W${mark}`;
                currentBoard[1][0] = `W${mark}`;
                currentBoard[2][0] = `W${mark}`;
                return true;
            }
        if (currentBoard[0][1] === mark && 
            currentBoard[1][1] === mark &&       
            currentBoard[2][1] === mark ) {
                currentBoard[0][1] = `W${mark}`;
                currentBoard[1][1] = `W${mark}`;
                currentBoard[2][1] = `W${mark}`;
                return true;
            }      
        if (currentBoard[0][2] === mark && 
            currentBoard[1][2] === mark &&       
            currentBoard[2][2] === mark ) {
                currentBoard[0][2] = `W${mark}`;
                currentBoard[1][2] = `W${mark}`;
                currentBoard[2][2] = `W${mark}`;
                return true;
            }    
        if (currentBoard[0][0] === mark && 
            currentBoard[1][1] === mark &&       
            currentBoard[2][2] === mark ) {
                currentBoard[0][0] = `W${mark}`;
                currentBoard[1][1] = `W${mark}`;
                currentBoard[2][2] = `W${mark}`;
                return true;
            } 
        if (currentBoard[0][2] === mark && 
            currentBoard[1][1] === mark &&       
            currentBoard[2][0] === mark ) {
                currentBoard[0][2] = `W${mark}`;
                currentBoard[1][1] = `W${mark}`;
                currentBoard[2][0] = `W${mark}`;
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
        reset,
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
                cell.style.border = "1px solid black";
                cell.style.textAlign = "center";
                cell.classList.add("cell");
                cell.setAttribute("i", i);
                cell.setAttribute("j", j);
                cell.addEventListener("click", (e) => {
                    if (game.isActive) {
                        const pickRow = e.target.getAttribute("i");
                        const pickCol = e.target.getAttribute("j");
                        
                        if (board.currentBoard[pickRow][pickCol] === null) {
                            board.currentBoard[pickRow][pickCol] = "X";
                            game.endGame("X");
                            render();                         
                            if (game.isActive) {
                                let row = Math.floor(Math.random() * 3);
                                let col = Math.floor(Math.random() * 3);
                                while (board.currentBoard[row][col] !== null) {
                                     row = Math.floor(Math.random() * 3);
                                     col = Math.floor(Math.random() * 3);
                                }
                                board.currentBoard[row][col] = "O";
                                game.endGame("O");
                                render();
                            }
                        }
                    }
                      
                    
                })
                if (board.currentBoard[i][j] === null) {
                    cell.classList.add("null");
                }else if (board.currentBoard[i][j] === "X") {
                    cell.classList.add("X");
                }else if (board.currentBoard[i][j] === "WX") {
                    cell.classList.add("WX");
                }else if (board.currentBoard[i][j] === "WO") {
                    cell.classList.add("WO");
                }else {                    
                    cell.classList.add("O");                
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

    const reset = function () {
        game.isActive = true;
        game.winner = undefined;
    }

    return {
        isActive,
        winner,
        endGame,
        reset,
    }
})()


const button = document.querySelector("button");
button.addEventListener("click",
() => {
    board.reset();
    game.reset();
    display.render();
})


display.render()




