let boxes = document.querySelectorAll(".box");
let resetBTN = document.querySelector("#reset-btn");
let newGameBTN = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msgWinner = document.querySelector("#msg");
let start = document.querySelector("#start-btn");
let mainBox = document.querySelector(".hide2");
let start2 = document.querySelector(".hide3");
let boes = document.querySelector(".bo");

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('theme-toggle');
//     const body = document.body;

//     // Check for saved theme preference or default to light theme
//     const currentTheme = localStorage.getItem('theme') || 'light-theme';
//     body.classList.add(currentTheme);

//     toggleButton.addEventListener('click', () => {
//         if (body.classList.contains('light-theme')) {
//             body.classList.replace('light-theme', 'dark-theme');
//             localStorage.setItem('theme', 'dark-theme');
//         } else {
//             body.classList.replace('dark-theme', 'light-theme');
//             localStorage.setItem('theme', 'light-theme');
//         }
//     });
// });

start2.classList.remove("hide3");

const startGame = () => {
  mainBox.classList.remove("hide2");
  start2.classList.add("hide3");
};

start.addEventListener("click", startGame);

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBox();
  mainBox.classList.remove("hide2");
  msgContainer.classList.add("hide");
  resetBTN.classList.remove("hide2");
};

resetBTN.classList.remove("hide2");

newGameBTN.addEventListener("click", resetGame());
resetBTN.addEventListener("click", resetGame());

const checkWinner = () => {
  return winPatterns.some((pattern) => {
    const [a, b, c] = pattern;
    return (
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText &&
      boxes[a].innerText !== ""
    );
  });
};

const checkDraw = () => {
  return [...boxes].every((box) => box.innerText !== "");
};

const disableBox = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enableBox = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

boes.forEach((bo) => {
  bo.addEventListener("click", () => {
    if (bo.innerText === "") {
      bo.innerText = turnO ? "O" : "X";
      turnO = !turnO;
    }
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turnO ? "O" : "X";
      turnO = !turnO;
      if (checkWinner()) {
        disableBox();
        msgContainer.classList.remove("hide");
        mainBox.classList.add("hide2");
        msgWinner.innerText = `Winner: ${turnO ? "X" : "O"}`;
        resetBTN.classList.add("hide2");
        return;
      } else if (checkDraw()) {
        disableBox();
        msgContainer.classList.remove("hide");
        mainBox.classList.add("hide2");
        msgWinner.innerText = "It's a Draw!";
        resetBTN.classList.add("hide2");
        return;
      }
    }
  });
});

resetGame();
