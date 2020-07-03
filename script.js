let playerCount = 0;
let scores = [];
let inProgress = false;
let currentGame = "";

let container = document.getElementById("container");

let message = document.createElement("div");
message.textContent = "Select a game";
message.style.fontSize = "3vh";
container.appendChild(message);

let content = document.createElement("div");
content.textContent = "";
content.classList.add("content");
container.appendChild(content);

let scoreBox = document.createElement("input");
scoreBox.setAttribute("type", "text");

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
  count = prompt(
    "How many people or teams are playing? Maximum 4 players or teams at a time."
  );

  if (count === null) return;

  if (count > 4) {
    alert("Too many players!");
    return;
  } else {
    playerCount = count;
    makeTable(playerCount);
  }
}

function makeTable(players) {
  clearTable();
  for (let i = 0; i < players * 2; i++) {
    content.style.setProperty("--grid-rows", 2);
    content.style.setProperty("--grid-cols", players);
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    if (i < players) {
      cell.textContent = `Player ${i + 1}`;
    } else {
      cell.textContent = "";
    }
    content.appendChild(cell);
  }

  container.appendChild(scoreBox);

  inProgress = true;
}

function clearTable() {
  content.textContent = "";
  if (inProgress) {
    container.removeChild(scoreBox);
  }
}

function removeStart() {
  container.removeChild(start);
}

/* function to make and play 501. Starts by displaying rules. When start is clicked, asked for number of players then makes game */
function makeFiveOhOne() {
  inProgress = false;
  clearMessage();
  message.textContent =
    "Count down from 501. Final dart must be a double to win. Enter the turn total in the box. Click start for a New Game";

  currentGame = "501";
  start();
}

function makeOneThousandOne() {
  inProgress = false;
  clearMessage();
  message.textContent =
    "Count down from 1001. Final Dart must be a double to win. Enter the turn total in the box. Click start for a New Game";

  currentGame = "1001";
  start();
}
