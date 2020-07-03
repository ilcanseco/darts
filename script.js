let playerCount = 0;

let container = document.getElementById("container");

let message = document.createElement("div");
message.textContent = "Select a game";
message.style.fontSize = "3vh";
container.appendChild(message);

let content = document.createElement("div");
content.textContent = "";
content.classList.add("content");
container.appendChild(content);

function clearMessage() {
  message.textContent = "";
}

function start() {
  let start = document.createElement("button");
  start.textContent = "start";
  start.addEventListener("click", numPlayers);
  container.appendChild(start);
}

function numPlayers() {
  playerCount = prompt("How many people are playing?");

  makeTable(playerCount);
}

function makeTable(players) {
  for (let i = 0; i < players * 2; i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    if (i < players) {
      cell.textContent = `Player ${i + 1}`;
    } else {
      cell.textContent = "501";
    }
    content.appendChild(cell);
  }
}

/* function to make 501. Starts by displaying rules. When start is clicked, asked for number of players then makes game */
function makeFiveOhOne() {
  clearMessage();

  message.textContent =
    "Count down from 501. Final dart must be a double to win. Click start for a New Game";
  start();
}
