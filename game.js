let winnerCount = 0;
let loserCount = 0;

let clickSound = document.querySelector("#click-sound");

const img = document.querySelector("img");

function logWin() {
  document.getElementById("result").innerHTML = "You Won!";
  winnerCount += 1;
}

function logLoss() {
  document.getElementById("result").innerHTML = "Defeated!";
  loserCount += 1;
}

function tieResult() {
  document.getElementById("result").innerHTML = "Tie! Go Again.";
  document.getElementById("result-explanation").innerHTML = "Draw";
  img.src = "assets/brett-jordan-6270028.jpg";
  img.alt = "tiles that spells out 'stop, think, engage'";
}

function logCounter() {
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
}

function rockCrushesScissors() {
  document.getElementById("result-explanation").innerHTML =
    "Rock Crushes Scissors";
  img.src = "assets/20221021_004313.jpg";
  img.alt = "two hands gesturing rock and scissors";
}

function rockCrushesLizard() {
  document.getElementById("result-explanation").innerHTML =
    "Rock Crushes Lizard";
  img.src = "assets/20221021_004309.jpg";
  img.alt = "two hands gesturing rock and lizard";
}

function paperCoversRock() {
  document.getElementById("result-explanation").innerHTML = "Paper Covers Rock";
  img.src = "assets/20221021_004335.jpg";
  img.alt = "two hands gesturing paper and rock";
}

function paperDisprovesSpock() {
  document.getElementById("result-explanation").innerHTML =
    "Paper Disproves Spock";
  img.src = "assets/20221021_004350.jpg";
  img.alt = "two hands gesturing paper and Spock";
}

function scissorsCutsPaper() {
  document.getElementById("result-explanation").innerHTML =
    "Scissors Cuts Paper";
  img.src = "assets/20221021_004410.jpg";
  img.alt = "two hands gesturing scissors and paper";
}

function scissorsDecapitatesLizard() {
  document.getElementById("result-explanation").innerHTML =
    "Scissors Decapitates Lizard";
  img.src = "assets/20221021_004417.jpg";
  img.alt = "two hands gesturing scissors and lizard";
}

function lizardEatsPaper() {
  document.getElementById("result-explanation").innerHTML = "Lizard Eats Paper";
  img.src = "assets/20221021_004451.jpg";
  img.alt = "two hands gesturing lizard and paper";
}

function lizardPoisonsSpock() {
  document.getElementById("result-explanation").innerHTML =
    "Lizard Poisons Spock";
  img.src = "assets/20221021_004441.jpg";
  img.alt = "two hands gesturing lizard and Spock";
}

function spockVaporizesRock() {
  document.getElementById("result-explanation").innerHTML =
    "Spock Vaporizes Rock";
  img.src = "assets/20221021_004547.jpg";
  img.alt = "two hands gesturing Spock and rock";
}

function spockSmashesScissors() {
  document.getElementById("result-explanation").innerHTML =
    "Spock Smashes Scissors";
  img.src = "assets/20221021_004536.jpg";
  img.alt = "two hands gesturing spock and scissors";
}

function generatedChoice() {
  let computerChoice = Math.random();

  if (computerChoice <= 0.2) {
    computerChoice = "rock";
  } else if (0.21 <= computerChoice <= 0.4) {
    computerChoice = "paper";
  } else if (0.41 <= computerChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (0.61 <= computerChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
  return computerChoice;
}

document.getElementById("rock").addEventListener("click", function () {
  clickSound.play();
  let userInput = "rock";
  let comChoice = generatedChoice();

  if (userInput === comChoice) {
    tieResult();
  } else if (comChoice === "paper") {
    logLoss();
    paperCoversRock();
  } else if (comChoice === "spock") {
    logLoss();
    spockVaporizesRock();
  } else if (comChoice === "scissors") {
    logWin();
    rockCrushesScissors();
  } else if (comChoice === "lizard") {
    logWin();
    rockCrushesLizard();
  }
  logCounter();
});

document.getElementById("paper").addEventListener("click", function () {
  clickSound.play();
  let userInput = "paper";
  let comChoice = generatedChoice();

  if (userInput === comChoice) {
    tieResult();
  } else if (comChoice === "scissors") {
    logLoss();
    scissorsCutsPaper();
  } else if (comChoice === "lizard") {
    logLoss();
    lizardEatsPaper();
  } else if (comChoice === "rock") {
    logWin();
    paperCoversRock();
  } else if (comChoice === "spock") {
    logWin();
    paperDisprovesSpock();
  }
  logCounter();
});

document.getElementById("scissors").addEventListener("click", function () {
  clickSound.play();
  let userInput = "scissors";
  let comChoice = generatedChoice();

  if (userInput === comChoice) {
    tieResult();
  } else if (comChoice === "rock") {
    logLoss();
    rockCrushesScissors();
  } else if (comChoice === "spock") {
    logLoss();
    spockSmashesScissors();
  } else if (comChoice === "paper") {
    logWin();
    scissorsCutsPaper();
  } else if (comChoice === "lizard") {
    logWin();
    scissorsDecapitatesLizard();
  }
  logCounter();
});

document.getElementById("lizard").addEventListener("click", function () {
  clickSound.play();
  let userInput = "lizard";
  let comChoice = generatedChoice();

  if (userInput === comChoice) {
    tieResult();
  } else if (comChoice === "rock") {
    logLoss();
    rockCrushesLizard();
  } else if (comChoice === "scissors") {
    logLoss();
    scissorsDecapitatesLizard();
  } else if (comChoice === "paper") {
    logWin();
    lizardEatsPaper();
  } else if (comChoice === "spock") {
    logWin();
    lizardPoisonsSpock();
  }
  logCounter();
});

document.getElementById("spock").addEventListener("click", function () {
  clickSound.play();
  let userInput = "spock";
  let comChoice = generatedChoice();

  if (userInput === comChoice) {
    tieResult();
  } else if (comChoice === "paper") {
    logLoss();
    paperDisprovesSpock();
  } else if (comChoice === "lizard") {
    logLoss();
    lizardPoisonsSpock();
  } else if (comChoice === "scissors") {
    logWin();
    spockSmashesScissors();
  } else if (comChoice === "rock") {
    logWin();
    spockVaporizesRock();
  }
  logCounter();
});

document
  .getElementById("clear-scoreboard")
  .addEventListener("click", function () {
    clickSound.play();
    winnerCount = 0;
    loserCount = 0;
    document.getElementById("user-total").innerText = 0;
    document.getElementById("computer-total").innerText = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result-explanation").innerHTML = "";
    img.src = "assets/ds-stories-6005213.jpg";
    img.alt =
      "white tiles that spells out 'play the game' on a green background";
  });
