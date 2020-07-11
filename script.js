let playerCount = 0;
let inProgress = false;
let alreadyPlayed = false;
let pressed = false;
let currentGame = "";

let scores = [];
let atwArray = [15, 16, "Doubles", 17, 18, "Triples", 19, 20, "Bullseye"];
let efArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  25,
];

let turnTotal = 0;
let round = 0;

let player = 1;

let container = document.getElementById("container");

// creating div to display messages
let message = document.createElement("div");
message.classList.add("message");
message.textContent = "Select a game";
message.style.fontSize = "3vh";
container.appendChild(message);

// creating div to display the table
let content = document.createElement("div");
content.textContent = "";
content.classList.add("content");
container.appendChild(content);

// creating div for play area aka buttons inputs messages
let playArea = document.createElement("div");
playArea.textContent = "";
playArea.classList.add("playArea");
container.appendChild(playArea);

// creating div to create input for playArea
let scoreBox = document.createElement("input");
scoreBox.type = "text";
scoreBox.id = "scoreBox";

// creating div for messages in playArea
let playMessage = document.createElement("div");
playMessage.textContent = "";

// clears messages
function clearMessage() {
  message.textContent = "";
}

// clears playMessage
function clearPlayMessage() {
  playMessage.textContent = "";
}

// adds the start button to the playArea with an eventListener when clicked which calls numPlayers()
function start() {
  let start = document.createElement("button");
  start.textContent = "start";
  start.addEventListener("click", numPlayers);
  playArea.appendChild(start);
}

// gets the amount of players in the game and passes to makeTable() with size constraint on num of players per game
function numPlayers() {
  if (currentGame === "cricket") {
    alert("Only 2 players or teams allowed for this game.");
    playerCount = 2;
    clearTable();
    playCricket();
  } else {
    count = prompt(
      "How many people or teams are playing? Maximum 4 players or teams at a time."
    );

    if (count === null) return;

    if (count > 4) {
      alert("Too many players!");
      return;
    } else if (count <= 0) {
      alert("Too little players");
      return;
    } else {
      playerCount = parseInt(count);
      makeTable(playerCount);
    }
  }
}

// builds the table based on how many players, makes a game start and then passes what the current game is to the game selector
function makeTable(players) {
  clearTable();
  for (let i = 0; i < players * 2; i++) {
    content.style.setProperty("--grid-rows", 2);
    content.style.setProperty("--grid-cols", players);
    let cell = document.createElement("div");
    cell.id = `cell${i}`;
    cell.classList.add("grid-item");
    if (i < players) {
      cell.textContent = `Player ${i + 1}`;
    } else {
      cell.textContent = "";
    }
    content.appendChild(cell);
  }

  inProgress = true;

  /* Have to figure this out still */
  gameSwitch(currentGame);
  /* Have to figure this out still */
}

// clears the table and message in the playArea and sets the inProgress boolean to falsew
function clearTable() {
  content.textContent = "";
  if (inProgress) {
    // playArea.removeChild(playMessage);
    // if (currentGame === "850" || currentGame === "blind") {
    //   playArea.removeChild(buttons);
    // } else {
    //   playArea.removeChild(scoreBox);
    // }
    playArea.removeChild(scoreBox);
    playArea.removeChild(playMessage);
  }
  inProgress = false;
}

// clears the buttons from the playArea;
function clearButtons() {}

// removes the start button from the playArea
function removeStart() {
  container.removeChild(start);
}

/* function to make 501 after the button is pressed. Starts by displaying rules. When start is 
clicked, asked for number of players then makes game. Sets the currentGame string  */
function makeFiveOhOne() {
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

/* function to make 1001 after the button is pressed. Starts by clearing messages and displaying rules. When start is 
clicked, asked for number of players then makes game . Sets the currentGame string */
function makeOneThousandOne() {
  clearMessage();
  clearTable();
  message.textContent =
    "Count down from 1001. Final Dart must be a double to win. Enter the turn total in the box. Click start for a New Game.";

  currentGame = "1001";
  if (!pressed) {
    start();
    pressed = true;
  }
}

/* function to make cricket after the button is pressed. Starts by clearing messages and displaying rules. When start is 
clicked, asked for number of players then makes game. Sets the currentGame string  */
function makeCricket() {
  clearMessage();
  clearTable();
  message.textContent =
    "The objective is to clear all houses. To do this, a total of 3 must be crossed off per house. If you clear a house and your" +
    " opponent does not have that house cleared yet, you can score points the same amount as that house. If you have all " +
    "houses cleared first, you win. If you have less points than your opponent and all houses are cleared, you must score more " +
    "or equal points to win. Click start for a New Game.";

  currentGame = "cricket";
  /*    DONT
   *     FORGET
   *     THIS
   *     SHIT */
  start();
  pressed = true;
}

/* function to make ATW after the button is pressed. Starts by clearing messages and displaying rules. When start is 
clicked, asked for number of players then makes game. Sets the currentGame string  */
function makeAtw() {
  clearMessage();
  clearTable();
  message.textContent =
    "All players start with 100 points. Follow along with the messages to see what to aim for. If all darts miss, player total " +
    "score gets halved. If any of the darts hit, the total gets added to your score. Highest score at the end of the game wins. " +
    "Enter the turn total in the box, or 0 if all darts miss. Click start for a New Game.";

  currentGame = "atw";
  if (!pressed) {
    start();
    pressed = true;
  }
}

/* function to make 850 after the button is pressed. Starts by clearing messages and displaying rules. When start is 
clicked, asked for number of players then makes game. Sets the currentGame string  */
function makeEightFifty() {
  clearMessage();
  clearTable();
  message.textContent =
    "On each turn the player aims for sections on the dart board from 1 to 20. If any of the darts hit the total gets added to" +
    " the score, but only if they scored in the corresponding number. For example if the target number is 7 and only one " +
    "dart hit 7, then the total for that turn would only be 7 points. All doubles and triples are ignored except for the D25. " +
    "Click the button options for how many darts scored. Click start for a New Game.";

  currentGame = "850";
  if (!pressed) {
    start();
    pressed = true;
  }
}

/* function to make blind shot after the button is pressed. Starts by clearing messages and displaying rules. When start is 
clicked, asked for number of players then makes game. Sets the currentGame string  */
function makeBlindShot() {
  clearMessage();
  clearTable();
  message.textContent =
    "The player's first throw is completely random. The subsequent throws should be within a 2 cm radius of the first throw. The " +
    "player scores points based on how many darts are within close proximity, with maximum 2 points per turn. If the first throw " +
    "is off the board, the player gets a rethrow. The first player to 20 points wins. Click the button options for how many " +
    "points scored. Click start for a New Game.";

  currentGame = "blind";
  if (!pressed) {
    start();
    pressed = true;
  }
}

/* function to make finisher after the button is pressed. Starts by clearing messages and displaying rules. When start is 
clicked, asked for number of players then makes game. Sets the currentGame string  */
function makeFinisher() {
  clearMessage();
  clearTable();
  message.textContent =
    "01 Game finishing practice. Players start with a score of 170 and count down until score reaches 0. Final dart must be " +
    "a double. Enter the turn total in the box. Click start for a New Game.";

  currentGame = "finisher";
  if (!pressed) {
    start();
    pressed = true;
  }
}

/* receives game title as param then calls functions to play the game */
function gameSwitch(gameMode) {
  switch (gameMode) {
    case "501":
      playFiveOhOne(scores);
      break;
    case "1001":
      playOneThousandOne(scores);
      break;
    case "atw":
      playAtw(scores);
      break;
    case "850":
      playEightFifty(scores);
      break;
    case "finisher":
      playFinisher(scores);
      break;
    case "blind":
      playBlindShot(scores);
    default:
      break;
  }
}

/* setting initial scores for the tables */
function setTable(array, value) {
  for (let i = 0; i < playerCount; i++) {
    array[i] = value;
    document.getElementById(`cell${i + playerCount}`).textContent = array[i];
  }
}

/* playing 501 */
function playFiveOhOne(array) {
  /*  DEBUG THIS LATER */
  // var old_element = document.getElementById("scoreBox");
  // var newScoreBox = old_element.cloneNode(true);
  // old_element.parentNode.replaceChild(new_element, old_element);

  // adding a scorebox to the playArea to get input
  playArea.appendChild(scoreBox);
  playArea.appendChild(playMessage);
  scoreBox.addEventListener("keydown", subTotal);

  // setting the scores array based on the number of players and displaying it to the DOM
  setTable(array, 501);
  player = 1;

  playMessage.textContent = `Player ${player}'s turn.`;
}

/* function to parse input and save it into turnTotal global variable. After, subtracts from score array and 
updates the table to reflect score after turn */
function subTotal(e) {
  if (e.key === "Enter") {
    let noWin = true;
    let winner = 0;

    // getting the value of the scoreBox and storing it in turnTotal
    e.preventDefault();
    turnTotal = parseInt(e.target.value);
    e.target.value = "";

    // checks to see if player busts if doesnt, update score
    if (player === playerCount) {
      if (scores[player - 1] - turnTotal >= 2) {
        scores[player - 1] -= turnTotal;
        if (scores[player - 1] === 0) {
          noWin = false;
          winner = player;
        }
      }
      player = 1;
    } else {
      if (scores[player - 1] - turnTotal >= 2) {
        scores[player - 1] -= turnTotal;
        if (scores[player - 1] === 0) {
          noWin = false;
          winner = player;
        }
      }
      player++;
    }

    // update the table after scores are modified
    for (let i = 0; i < playerCount; i++) {
      document.getElementById(`cell${i + playerCount}`).textContent = scores[i];
    }

    // updating playMessage
    if (noWin) {
      playMessage.textContent = `Player ${player}'s turn.`;
    } else {
      playerCount === 1
        ? (playMessage.textContent = `You finished! Please click start for a New Game`)
        : (playMessage.textContent = `Player ${winner} wins! Please click start for a New Game`);
    }
  }
}

/* playing 1001 */
function playOneThousandOne(array) {
  /*  DEBUG THIS LATER */
  // var old_element = document.getElementById("scoreBox");
  // var newScoreBox = old_element.cloneNode(true);
  // old_element.parentNode.replaceChild(new_element, old_element);

  // adding a scorebox to the playArea to get input
  playArea.appendChild(scoreBox);
  playArea.appendChild(playMessage);
  scoreBox.addEventListener("keydown", subTotal);

  // setting the scores array based on the number of players and displaying it to the DOM
  setTable(array, 1001);
  player = 1;

  playMessage.textContent = `Player ${player}'s turn.`;
}

/* playing finisher */
function playFinisher(array) {
  /*  DEBUG THIS LATER */
  // var old_element = document.getElementById("scoreBox");
  // var newScoreBox = old_element.cloneNode(true);
  // old_element.parentNode.replaceChild(new_element, old_element);

  // adding a scorebox to the playArea to get input
  playArea.appendChild(scoreBox);
  playArea.appendChild(playMessage);
  scoreBox.addEventListener("keydown", subTotal);

  // setting the scores array based on the number of players and displaying it to the DOM
  setTable(array, 170);
  player = 1;
  round = 0;

  playMessage.textContent = `Player ${player}'s turn.`;
}

/* playing around the world */
function playAtw(array) {
  /*  DEBUG THIS LATER */
  // var old_element = document.getElementById("scoreBox");
  // var newScoreBox = old_element.cloneNode(true);
  // old_element.parentNode.replaceChild(new_element, old_element);

  // adding a scorebox to the playArea to get input
  playArea.appendChild(scoreBox);
  playArea.appendChild(playMessage);
  scoreBox.addEventListener("keydown", addTotal);

  // setting the scores array based on the number of players and displaying it to the DOM
  setTable(array, 100);
  player = 1;

  playMessage.textContent =
    `Player ${player}'s turn. Aim for ` + atwArray[0] + ".";
}

function addTotal(e) {
  if (e.key === "Enter") {
    // getting the value of the scoreBox and storing it in turnTotal
    e.preventDefault();
    turnTotal = parseInt(e.target.value);
    e.target.value = "";

    // checks to see if player misses if doesnt, += turnTotal. If miss, ceil(score / 2)
    // round gets updated whenever first player goes again
    if (player === playerCount) {
      if (turnTotal !== 0) {
        scores[player - 1] += turnTotal;
      } else {
        scores[player - 1] = Math.ceil(scores[player - 1] / 2);
      }
      player = 1;
      round++;
    } else {
      if (turnTotal !== 0) {
        scores[player - 1] += turnTotal;
      } else {
        scores[player - 1] = Math.ceil(scores[player - 1] / 2);
      }
      player++;
    }

    // update the table after scores are modified
    for (let i = 0; i < playerCount; i++) {
      document.getElementById(`cell${i + playerCount}`).textContent = scores[i];
    }

    // finding the max of the scores array
    let highestScore = Math.max(...scores);
    let winningPlayer = scores.indexOf(highestScore);

    // updating playMessage
    round < atwArray.length
      ? (playMessage.textContent =
          `Player ${player}'s turn. Aim for ` + atwArray[round])
      : (playMessage.textContent = `Player ${
          winningPlayer + 1
        } wins with a score of ${highestScore}! Please click start for a New Game.`);
  }
}

/* playing 850 */
function playEightFifty(array) {
  // adding buttons to the playArea
  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let noneB = document.createElement("button");
  noneB.textContent = "0 Darts";
  noneB.value = 0;
  noneB.addEventListener("click", increase);
  buttons.appendChild(noneB);

  let oneB = document.createElement("button", increase);
  oneB.textContent = "1 Dart";
  oneB.value = 1;
  oneB.addEventListener("click", increase);
  buttons.appendChild(oneB);

  let twoB = document.createElement("button", increase);
  twoB.textContent = "2 Darts";
  twoB.value = 2;
  twoB.addEventListener("click", increase);
  buttons.appendChild(twoB);

  let threeB = document.createElement("button", increase);
  threeB.textContent = "3 Darts";
  threeB.value = 3;
  threeB.addEventListener("click", increase);
  buttons.appendChild(threeB);

  playArea.appendChild(playMessage);
  playArea.appendChild(buttons);

  // setting the scores array based on the number of players and displaying it to the DOM
  setTable(array, 0);
  player = 1;
  round = 0;

  playMessage.textContent = `Player ${player}'s turn. Aim for ${efArray[0]}.`;
}

function increase(e) {
  if (player === playerCount) {
    scores[player - 1] += efArray[round] * e.target.value;
    player = 1;
    round++;
  } else {
    scores[player - 1] += efArray[round] * e.target.value;
    player++;
  }

  // update the table after scores are modified
  for (let i = 0; i < playerCount; i++) {
    document.getElementById(`cell${i + playerCount}`).textContent = scores[i];
  }

  // finding the max of the scores array
  let highestScore = Math.max(...scores);
  let winningPlayer = scores.indexOf(highestScore);

  // updating playMessage
  round < efArray.length
    ? (playMessage.textContent =
        `Player ${player}'s turn. Aim for ` + efArray[round])
    : (playMessage.textContent = `Player ${
        winningPlayer + 1
      } wins with a score of ${highestScore}! Please click start for a New Game.`);
}

function playBlindShot(array) {
  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let noneB = document.createElement("button");
  noneB.textContent = "0 Darts";
  noneB.value = 0;
  noneB.addEventListener("click", increaseBlind);
  buttons.appendChild(noneB);

  let oneB = document.createElement("button", increase);
  oneB.textContent = "1 Dart";
  oneB.value = 1;
  oneB.addEventListener("click", increaseBlind);
  buttons.appendChild(oneB);

  let twoB = document.createElement("button", increase);
  twoB.textContent = "2 Darts";
  twoB.value = 2;
  twoB.addEventListener("click", increaseBlind);
  buttons.appendChild(twoB);

  setTable(array, 0);
  player = 1;
  round = 0;

  playMessage.textContent = `Player ${player}'s turn.`;
}

function increaseBlind(e) {}

// function playCricket() {
//   makeCricketTable();
// }

// function makeCricketTable();
