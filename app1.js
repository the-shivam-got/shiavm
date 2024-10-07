// DOM elements
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msgWinner = document.querySelector("#msg");
const startBtn = document.querySelector("#start-btn");
const mainBox = document.querySelector(".main-box");
const startScreen = document.querySelector(".start-screen");

// Game state
let turnO = true;
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
    [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

// Helper functions
const showElement = (element) => element.classList.remove("hide");
const hideElement = (element) => element.classList.add("hide");

const checkWinner = () => {
    return winPatterns.some(([a, b, c]) => 
        boxes[a].innerText && 
        boxes[a].innerText === boxes[b].innerText && 
        boxes[a].innerText === boxes[c].innerText
    );
};

const checkDraw = () => [...boxes].every(box => box.innerText !== "");

const disableBoxes = () => boxes.forEach(box => box.disabled = true);
const enableBoxes = () => boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
});

// Game logic functions
const startGame = () => {
    showElement(mainBox);
    hideElement(startScreen);
};

const endGame = (winner) => {
    disableBoxes();
    showElement(msgContainer);
    hideElement(mainBox);
    hideElement(resetBtn);
    msgWinner.innerText = winner ? `Winner: ${winner}` : "It's a Draw!";
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    showElement(mainBox);
    hideElement(msgContainer);
    showElement(resetBtn);
};

// Event listeners
startBtn.addEventListener("click", startGame);

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerText === "") {
            const currentPlayer = turnO ? "O" : "X";
            box.innerText = currentPlayer;
            turnO = !turnO;
            
            if (checkWinner()) {
                endGame(currentPlayer);
            } else if (checkDraw()) {
                endGame(null);
            }
        }
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// Initialize game
hideElement(mainBox);
showElement(startScreen);