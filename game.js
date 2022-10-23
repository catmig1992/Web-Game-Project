let winnerCount = 0;
let loserCount = 0;

let clickSound = document.querySelector("#click-sound");

const img = document.querySelector("img");

function logWin() {
  document.getElementById("result").innerHTML = "Winner!";
  winnerCount += 1;
}
// let computerChoice = Math.random();
// if (computerChoice <= 0.2) {
//   computerChoice = "rock";
// } else if (0.21 <= computerChoice <= 0.4) {
//   computerChoice = "paper";
// } else if (0.41 <= computerChoice <= 0.6) {
//   computerChoice = "scissors";
// } else if (0.61 <= computerChoice <= 0.8) {
//   computerChoice = "lizard";
// } else {
//   computerChoice = "spock";
// }
// console.log(computerChoice);

//code breaks when refactoring the logic above into a function, probably need to work on variable names

document.getElementById("rock").addEventListener("click", function () {
  clickSound.play();
  let userInput = "rock";
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
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
    img.src = "assets/brett-jordan-6270028.jpg";
    img.alt = "tiles that spells out 'stop, think, engage'";
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Paper Covers Rock";
    img.src = "assets/20221021_004335.jpg";
    img.alt = "two hands gesturing paper and rock";
    loserCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Spock Vaporizes Rock";
    img.src = "assets/20221021_004547.jpg";
    img.alt = "two hands gesturing Spock and rock";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Rock Crushes Scissors";
    img.src = "assets/20221021_004313.jpg";
    img.alt = "two hands gesturing rock and scissors";
  } else if (computerChoice === "lizard") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Rock Crushes Lizard";
    img.src = "assets/20221021_004309.jpg";
    img.alt = "two hands gesturing rock and lizard";
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});

document.getElementById("paper").addEventListener("click", function () {
  clickSound.play();
  let userInput = "paper";
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
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
    img.src = "assets/brett-jordan-6270028.jpg";
    img.alt = "tiles that spells out 'stop, think, engage'";
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Scissors Cuts Paper";
    img.src = "assets/20221021_004410.jpg";
    img.alt = "two hands gesturing scissors and paper";
    loserCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Lizard Eats Paper";
    img.src = "assets/20221021_004451.jpg";
    img.alt = "two hands gesturing lizard and paper";
    loserCount += 1;
  } else if (computerChoice === "rock") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Paper Covers Rock";
    img.src = "assets/20221021_004335.jpg";
    img.alt = "two hands gesturing paper and rock";
  } else if (computerChoice === "spock") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Paper Disproves Spock";
    img.src = "assets/20221021_004350.jpg";
    img.alt = "two hands gesturing paper and Spock";
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});

document.getElementById("scissors").addEventListener("click", function () {
  clickSound.play();
  let userInput = "scissors";
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
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
    img.src = "assets/brett-jordan-6270028.jpg";
    img.alt = "tiles that spells out 'stop, think, engage'";
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Rock Crushes Scissors";
    img.src = "assets/20221021_004313.jpg";
    img.alt = "two hands gesturing rock and scissors";
    loserCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Spock Smashes Scissors";
    img.src = "assets/20221021_004536.jpg";
    img.alt = "two hands gesturing spock and scissors";
    loserCount += 1;
  } else if (computerChoice === "paper") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Scissors Cuts Paper";
    img.src = "assets/20221021_004410.jpg";
    img.alt = "two hands gesturing scissors and paper";
  } else if (computerChoice === "lizard") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Scissors Decapitates Lizard";
    img.src = "assets/20221021_004417.jpg";
    img.alt = "two hands gesturing scissors and lizard";
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});

document.getElementById("lizard").addEventListener("click", function () {
  clickSound.play();
  let userInput = "lizard";
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
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
    img.src = "assets/brett-jordan-6270028.jpg";
    img.alt = "tiles that spells out 'stop, think, engage'";
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Rock Crushes Lizard";
    img.src = "assets/20221021_004309.jpg";
    img.alt = "two hands gesturing rock and lizard";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Scissors Decapitates Lizard";
    img.src = "assets/20221021_004417.jpg";
    img.alt = "two hands gesturing scissors and lizard";
    loserCount += 1;
  } else if (computerChoice === "paper") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Lizard Eats Paper";
    img.src = "assets/20221021_004451.jpg";
    img.alt = "two hands gesturing lizard and paper";
  } else if (computerChoice === "spock") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Lizard Poisons Spock";
    img.src = "assets/20221021_004441.jpg";
    img.alt = "two hands gesturing lizard and Spock";
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});

document.getElementById("spock").addEventListener("click", function () {
  clickSound.play();
  let userInput = "spock";
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
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
    img.src = "assets/brett-jordan-6270028.jpg";
    img.alt = "tiles that spells out 'stop, think, engage'";
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Paper Disproves Spock";
    img.src = "assets/20221021_004350.jpg";
    img.alt = "two hands gesturing paper and Spock";
    loserCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Lizard Poisons Spock";
    img.src = "assets/20221021_004441.jpg";
    img.alt = "two hands gesturing lizard and Spock";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Spock Smashes Scissors";
    img.src = "assets/20221021_004536.jpg";
    img.alt = "two hands gesturing Spock and scissors";
  } else if (computerChoice === "rock") {
    logWin();
    document.getElementById("result-explanation").innerHTML =
      "Spock Vaporizes Rock";
    img.src = "assets/20221021_004547.jpg";
    img.alt = "two hands gesturing Spock and rock";
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
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
