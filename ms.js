let board = [];
let rows = 10;
let cols = 10;
let minesCount = 20;
let minesLocation = []; // Array to store mine positions
let tilesClicked = 0;
let gameOver = false;

function createB() {
    let board = [];
    for (let r = 0; r < rows; r++) {
        let row = []
        for (let c = 0; c < cols; c++) {
            row.push({
                hasMine: false,
                revealed: false,
                flagged: false,
                adjacentMines: 0
            }
            )
        } board.push(row)
    }
}

// Create the game board
function createBoard() {
    board = [];
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            row.push({
                hasMine: false,
                revealed: false,
                flagged: false,
                adjacentMines: 0
            });
        }
        board.push(row);
    }
}

// Place random mines on the board
function placeMines() {
    let placedMines = 0;
    while (placedMines < minesCount) {
        let randomRow = Math.floor(Math.random() * rows);
        let randomCol = Math.floor(Math.random() * cols);

        if (!board[randomRow][randomCol].hasMine) {
            board[randomRow][randomCol].hasMine = true;
            minesLocation.push({ row: randomRow, col: randomCol });
            placedMines++;
        }
    }
}

// Calculate adjacent mines for each cell
function calculateAdjacentMines() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!board[r][c].hasMine) {
                let adjacentMines = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (isValidCell(r + i, c + j) && board[r + i][c + j].hasMine) {
                            adjacentMines++;
                        }
                    }
                }
                board[r][c].adjacentMines = adjacentMines;
            }
        }
    }
}

// Check if cell is valid
function isValidCell(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
}

// Reveal a tile and check for game over
function revealTile(row, col) {
    if (gameOver || board[row][col].revealed) return;

    board[row][col].revealed = true;
    tilesClicked++;

    if (board[row][col].hasMine) {
        gameOver = true;
        revealMines();
        alert('Game Over! You hit a mine.');
        return;
    }

    if (board[row][col].adjacentMines > 0) {
        document.getElementById(`tile-${row}-${col}`).innerText = board[row][col].adjacentMines;
    } else {
        document.getElementById(`tile-${row}-${col}`).classList.add('empty');
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (isValidCell(row + i, col + j) && !board[row + i][col + j].revealed) {
                    revealTile(row + i, col + j);
                }
            }
        }
    }

    if (tilesClicked === rows * cols - minesCount) {
        alert('You Win!');
        gameOver = true;
    }
}

// Reveal all mines when the game is over
function revealMines() {
    for (let mine of minesLocation) {
        document.getElementById(`tile-${mine.row}-${mine.col}`).innerText = '💣';
        document.getElementById(`tile-${mine.row}-${mine.col}`).classList.add('mine');
    }
}

// Flag a tile as mine
function flagTile(event, row, col) {
    event.preventDefault(); // Disable right-click context menu

    if (gameOver || board[row][col].revealed) return;

    if (!board[row][col].flagged) {
        board[row][col].flagged = true;
        document.getElementById(`tile-${row}-${col}`).innerText = '🚩';
    } else {
        board[row][col].flagged = false;
        document.getElementById(`tile-${row}-${col}`).innerText = '';
    }
}

// Initialize the game
function startGame() {
    gameOver = false;
    tilesClicked = 0;
    createBoard();
    placeMines();
    calculateAdjacentMines();
    renderBoard();
}

// Render the game board in HTML
function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    for (let r = 0; r < rows; r++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let c = 0; c < cols; c++) {
            let tileDiv = document.createElement('div');
            tileDiv.id = `tile-${r}-${c}`;
            tileDiv.classList.add('tile');
            tileDiv.addEventListener('click', () => revealTile(r, c));
            tileDiv.addEventListener('contextmenu', (e) => flagTile(e, r, c));

            rowDiv.appendChild(tileDiv);
        }

        boardElement.appendChild(rowDiv);
    }
}

// Start the game on page load
window.onload = () => {
    startGame();
};
