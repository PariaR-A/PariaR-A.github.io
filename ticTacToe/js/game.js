const players = ["X", "O"];
let currentPlayer = players[0];

//selectors

const board = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");
const infoElement = document.querySelector("#info");
const reset = document.querySelector("#restart");
infoElement.innerHTML = `${currentPlayer}: is playing `;
//eventlisteners
reset.addEventListener("click", restartButton);

const winning_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(currentPlayer) {
  for (let i = 0; i < winning_combinations.length; i++) {
    const [a, b, c] = winning_combinations[i];
    if (
      cells[a].classList.contains(`${currentPlayer}`) &&
      cells[b].classList.contains(`${currentPlayer}`) &&
      cells[c].classList.contains(`${currentPlayer}`)
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.length === 1) {
      return false;
    }
  }
  return true;
}

function restartButton() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList = "cell";
  }
  currentPlayer = players[0];
  infoElement.innerHTML = `${currentPlayer}: is playing `;
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", () => {
    if (cells[i].classList.length > 1) {
      return;
    }

    cells[i].classList.toggle(`${currentPlayer}`);
    if (checkWin(currentPlayer)) {
      infoElement.innerHTML = `Game over! ${currentPlayer} wins!`;
      return;
    }
    if (checkTie()) {
      infoElement.innerHTML = `Game is tied!`;
      return;
    }
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    if (currentPlayer == players[0]) {
      infoElement.innerHTML = `${currentPlayer}: is playing `;
    } else {
      infoElement.innerHTML = `${currentPlayer}: is playing `;
    }
  });
}
