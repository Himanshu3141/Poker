const bank = document.getElementById("bank");
const roundsInput = document.getElementById("rounds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

const p1value = document.getElementById("1");
const p2value = document.getElementById("2");
const p3value = document.getElementById("3");
const p4value = document.getElementById("4");
const p5value = document.getElementById("5");
const p6value = document.getElementById("6");

const p1btn = document.getElementById("btn1");
const p2btn = document.getElementById("btn2");
const p3btn = document.getElementById("btn3");
const p4btn = document.getElementById("btn4");
const p5btn = document.getElementById("btn5");
const p6btn = document.getElementById("btn6");

let players = [
  { id: "Player 1", balance: 1000000, inputId: "inp1", btnId: "btn1", valueId: "1" },
  { id: "Player 2", balance: 1000000, inputId: "inp2", btnId: "btn2", valueId: "2" },
  { id: "Player 3", balance: 1000000, inputId: "inp3", btnId: "btn3", valueId: "3" },
  { id: "Player 4", balance: 1000000, inputId: "inp4", btnId: "btn4", valueId: "4" },
  { id: "Player 5", balance: 1000000, inputId: "inp5", btnId: "btn5", valueId: "5" },
  { id: "Player 6", balance: 1000000, inputId: "inp6", btnId: "btn6", valueId: "6" }
];

let totalRounds = 0;
let currentRound = 0;
let currentPlayerIndex = 0;
let bvalue = 0;

function initializePlayers() {
  players.forEach(player => {
    document.getElementById(player.valueId).innerText = player.balance;
    document.getElementById(player.btnId).onclick = () => handleBid(player);
  });
}

function handleBid(player) {
  const input = document.getElementById(player.inputId);
  const bidAmount = parseInt(input.value);

  if (isNaN(bidAmount) || bidAmount <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  if (player.balance <= 0) {
    alert("You have no balance to bid.");
    return;
  }

  if (bidAmount > player.balance) {
    alert("You cannot bid more than your current balance.");
    return;
  }

  bvalue += bidAmount;
  bank.innerText = bvalue;
  player.balance -= bidAmount;
  document.getElementById(player.valueId).innerText = player.balance;

 
  currentPlayerIndex++;

  if (currentPlayerIndex >= players.length) {
    currentPlayerIndex = 0;
    currentRound++;

    if (currentRound >= totalRounds) {
      endGame();
      return;
    }

    alert(`Round ${currentRound} completed! Starting next round.`);
  }
}

function startGame() {
  totalRounds = parseInt(roundsInput.value);
  if (isNaN(totalRounds) || totalRounds <= 0) {
    alert("Please enter a valid number of rounds.");
    return;
  }

  currentRound = 0;
  currentPlayerIndex = 0;
  resetGame();
  alert("Game started! Players can start bidding.");
}

function resetGame() {
  bvalue = 0;
  bank.innerText = bvalue;
  players.forEach(player => {
    player.balance = 1000000;
    document.getElementById(player.valueId).innerText = player.balance;
  });

  currentRound = 0;
  currentPlayerIndex = 0;
}

function endGame() {
  const winner = players
    .filter(player => player.balance > 0)
    .sort((a, b) => b.balance - a.balance)[0];

  if (winner) {
    alert(`${winner.id} is the winner with a balance of ${winner.balance}!`);
  } else {
    alert("No winner as all players have zero balance.");
  }

  players.forEach(player => {
    document.getElementById(player.btnId).disabled = true;
  });
}

initializePlayers();

startButton.onclick = startGame;
resetButton.onclick = resetGame;
