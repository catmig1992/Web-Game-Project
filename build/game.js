"use strict";
let winnerCount = 0;
let loserCount = 0;
let clickSound = document.querySelector("#click-sound");
const img = document.querySelector("img");
const result = document.getElementById("result");
const resultDetail = document.getElementById("result-explanation");
const userTotal = document.getElementById("user-total");
const computerTotal = document.getElementById("computer-total");
function logWin(result) {
  result.innerHTML = "You Won!";
  winnerCount += 1;
}
function logLoss(result) {
  result.innerHTML = "Defeated!";
  loserCount += 1;
}
function tieResult(result, resultDetail) {
  result.innerHTML = "Tie! Go Again.";
  resultDetail.innerHTML = "Draw";
  img.src = "assets/brett-jordan-6270028.jpg";
  img.alt = "tiles that spells out 'stop, think, engage'";
}
function logCounter(userTotal, computerTotal) {
  userTotal.textContent = winnerCount;
  computerTotal.textContent = loserCount;
}
function rockCrushesScissors(resultDetail) {
  resultDetail.innerHTML = "Rock Crushes Scissors";
  img.src = "assets/20221021_004313.jpg";
  img.alt = "two hands gesturing rock and scissors";
}
function rockCrushesLizard(resultDetail) {
  resultDetail.innerHTML = "Rock Crushes Lizard";
  img.src = "assets/20221021_004309.jpg";
  img.alt = "two hands gesturing rock and lizard";
}
function paperCoversRock(resultDetail) {
  resultDetail.innerHTML = "Paper Covers Rock";
  img.src = "assets/20221021_004335.jpg";
  img.alt = "two hands gesturing paper and rock";
}
function paperDisprovesSpock(resultDetail) {
  resultDetail.innerHTML = "Paper Disproves Spock";
  img.src = "assets/20221021_004350.jpg";
  img.alt = "two hands gesturing paper and Spock";
}
function scissorsCutsPaper(resultDetail) {
  resultDetail.innerHTML = "Scissors Cuts Paper";
  img.src = "assets/20221021_004410.jpg";
  img.alt = "two hands gesturing scissors and paper";
}
function scissorsDecapitatesLizard(resultDetail) {
  resultDetail.innerHTML = "Scissors Decapitates Lizard";
  img.src = "assets/20221021_004417.jpg";
  img.alt = "two hands gesturing scissors and lizard";
}
function lizardEatsPaper(resultDetail) {
  resultDetail.innerHTML = "Lizard Eats Paper";
  img.src = "assets/20221021_004451.jpg";
  img.alt = "two hands gesturing lizard and paper";
}
function lizardPoisonsSpock(resultDetail) {
  resultDetail.innerHTML = "Lizard Poisons Spock";
  img.src = "assets/20221021_004441.jpg";
  img.alt = "two hands gesturing lizard and Spock";
}
function spockVaporizesRock(resultDetail) {
  resultDetail.innerHTML = "Spock Vaporizes Rock";
  img.src = "assets/20221021_004547.jpg";
  img.alt = "two hands gesturing Spock and rock";
}
function spockSmashesScissors(resultDetail) {
  resultDetail.innerHTML = "Spock Smashes Scissors";
  img.src = "assets/20221021_004536.jpg";
  img.alt = "two hands gesturing spock and scissors";
}
function generatedChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.2) {
    computerChoice = "rock";
  } else if (0.21 <= computerChoice || computerChoice <= 0.4) {
    computerChoice = "paper";
  } else if (0.41 <= computerChoice || computerChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (0.61 <= computerChoice || computerChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
  return computerChoice;
}
let optionRock = document.getElementById("rock");
let optionPaper = document.getElementById("paper");
let optionScissors = document.getElementById("scissors");
let optionLizard = document.getElementById("lizard");
let optionSpock = document.getElementById("spock");
optionRock.addEventListener("click", function () {
  clickSound.play();
  let userInput = "rock";
  let comChoice = generatedChoice();
  if (userInput === comChoice) {
    tieResult(result, resultDetail);
  } else if (comChoice === "paper") {
    logLoss(result);
    paperCoversRock(resultDetail);
  } else if (comChoice === "spock") {
    logLoss(result);
    spockVaporizesRock(resultDetail);
  } else if (comChoice === "scissors") {
    logWin(result);
    rockCrushesScissors(resultDetail);
  } else if (comChoice === "lizard") {
    logWin(result);
    rockCrushesLizard(resultDetail);
  }
  logCounter(userTotal, computerTotal);
});
optionPaper.addEventListener("click", function () {
  clickSound.play();
  let userInput = "paper";
  let comChoice = generatedChoice();
  if (userInput === comChoice) {
    tieResult(result, resultDetail);
  } else if (comChoice === "scissors") {
    logLoss(result);
    scissorsCutsPaper(resultDetail);
  } else if (comChoice === "lizard") {
    logLoss(result);
    lizardEatsPaper(resultDetail);
  } else if (comChoice === "rock") {
    logWin(result);
    paperCoversRock(resultDetail);
  } else if (comChoice === "spock") {
    logWin(result);
    paperDisprovesSpock(resultDetail);
  }
  logCounter(userTotal, computerTotal);
});
optionScissors.addEventListener("click", function () {
  clickSound.play();
  let userInput = "scissors";
  let comChoice = generatedChoice();
  if (userInput === comChoice) {
    tieResult(result, resultDetail);
  } else if (comChoice === "rock") {
    logLoss(result);
    rockCrushesScissors(resultDetail);
  } else if (comChoice === "spock") {
    logLoss(result);
    spockSmashesScissors(resultDetail);
  } else if (comChoice === "paper") {
    logWin(result);
    scissorsCutsPaper(resultDetail);
  } else if (comChoice === "lizard") {
    logWin(result);
    scissorsDecapitatesLizard(resultDetail);
  }
  logCounter(userTotal, computerTotal);
});
optionLizard.addEventListener("click", function () {
  clickSound.play();
  let userInput = "lizard";
  let comChoice = generatedChoice();
  if (userInput === comChoice) {
    tieResult(result, resultDetail);
  } else if (comChoice === "rock") {
    logLoss(result);
    rockCrushesLizard(resultDetail);
  } else if (comChoice === "scissors") {
    logLoss(result);
    scissorsDecapitatesLizard(resultDetail);
  } else if (comChoice === "paper") {
    logWin(result);
    lizardEatsPaper(resultDetail);
  } else if (comChoice === "spock") {
    logWin(result);
    lizardPoisonsSpock(resultDetail);
  }
  logCounter(userTotal, computerTotal);
});
optionSpock.addEventListener("click", function () {
  clickSound.play();
  let userInput = "spock";
  let comChoice = generatedChoice();
  if (userInput === comChoice) {
    tieResult(result, resultDetail);
  } else if (comChoice === "paper") {
    logLoss(result);
    paperDisprovesSpock(resultDetail);
  } else if (comChoice === "lizard") {
    logLoss(result);
    lizardPoisonsSpock(resultDetail);
  } else if (comChoice === "scissors") {
    logWin(result);
    spockSmashesScissors(resultDetail);
  } else if (comChoice === "rock") {
    logWin(result);
    spockVaporizesRock(resultDetail);
  }
  logCounter(userTotal, computerTotal);
});
const scoreboardReset = document.getElementById("clear-scoreboard");
scoreboardReset.addEventListener("click", function () {
  clickSound.play();
  winnerCount = 0;
  loserCount = 0;
  userTotal.innerText = 0;
  computerTotal.innerText = 0;
  result.innerHTML = "";
  resultDetail.innerHTML = "";
  img.src = "assets/ds-stories-6005213.jpg";
  img.alt = "white tiles that spells out 'play the game' on a green background";
});
