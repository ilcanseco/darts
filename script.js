let playerCount = 0;
let scores = [];
let inProgress = false;
let pressed = false;
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

  /* Have to figure this out still */
  gameSwitch(currentGame);
  /* Have to figure this out still */
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
  clearTable();
  message.textContent =
    "Count down from 501. Final dart must be a double to win. Enter the turn total in the box. Click start for a New Game.";

  currentGame = "501";
  if (!pressed) {
    start();
    pressed = true;
  }
}

function makeOneThousandOne() {
  inProgress = false;
  clearMessage();
  clearTable();
  message.textContent =
    "Count down from 1001. Final Dart must be a double to win. Enter the turn total in the box. Click start for a New Game.";
  console.log(pressed);

  currentGame = "1001";
  if (!pressed) {
    start();
    pressed = true;
  }
}

function makeCricket() {
  inProgress = false;
  clearMessage();
  clearTable();
  message.textContent =
    "The objective is to clear all houses. To do this, a total of 3 must be crossed off per house. If you clear a house and your" +
    " opponent does not have that house cleared yet, you can score points the same amount as that house. If you have all houses cleared" +
    " first, you win. If you have less points than your opponent and all houses are cleared, you must score more or equal points to win." +
    " Click start for a New Game.";

  currentGame = "cricket";
  /*    DONT
   *     FORGET
   *     THIS
   *     SHIT */
  pressed = true;
}

function makeAtw() {
  inProgress = false;
  clearMessage();
  clearTable();
  message.textContent =
    "All players start with 100 points. Follow along with the messages to see what to aim for. If all darts miss, player total score " +
    "gets halved. If any of the darts hit, the total gets added to your score. Highest score at the end of the game wins. Enter the " +
    "turn total in the box, or 0 if all darts miss. Click start for a New Game.";

  currentGame = "atw";
  if (!pressed) {
    start();
    pressed = true;
  }
}

function makeEightFifty() {
  inProgress = false;
  clearMessage();
  clearTable();
  message.textContent =
    "On each turn the player aims for sections on the dart board from 1 to 20. If any of the darts hit the total gets added to the score, " +
    "but only if they scored in the corresponding number. For example if the target number is 7 and only one dart hit 7, then the total " +
    "for that turn would only be 7 points. All doubles and triples are ignored except for the D25. Click the button options for how many " +
    "darts scored. Click start for a New Game.";

  currentGame = "850";
  if (!pressed) {
    start();
    pressed = true;
  }
}

function makeBlindShot() {
  inProgress = false;
  clearMessage();
  clearTable();
  message.textContent =
    "The player's first throw is completely random. The subsequent throws should be within a 2 cm radius of the first throw. The player " +
    "scores points based on how many darts are within close proximity, with maximum 2 points per turn. If the first throw is off the " +
    "board, the player gets a rethrow. The first player to 20 points wins. Click the button options for how many points scored. " +
    "Click start for a New Game.";

  currentGame = "blind";
  if (!pressed) {
    start();
    pressed = true;
  }
}

function makeFinisher() {
  inProgress = false;
  clearMessage();
  clearTable();
  message.textContent =
    "01 Game finishing practice. Players start with a score of 170 and count down until score reaches 0. Final dart must be a double. " +
    "Enter the turn total in the box. Click start for a New Game.";

  currentGame = "finisher";
  if (!pressed) {
    start();
    pressed = true;
  }
}

function gameSwitch(gameMode) {
  switch (gameMode) {
    case "501":
      playFiveOhOne();
      break;
    case "1001":
      playOneThousandOne();
      break;
    case "cricket":
      playCricket();
      break;
    case "atw":
      playAtw();
      break;
    case "850":
      playEightFifty();
      break;
    case "finisher":
      playFinisher();
      break;
    default:
      break;
  }
}
