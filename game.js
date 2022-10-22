let winnerCount = 0;
let loserCount = 0;

let clickSound = document.querySelector("#click-sound");

// let computerChoice = Math.random();
// if (computerChoice <= 0.2) {
//   computerChoice = "rock";
// } else if (0.2 < computerChoice <= 0.4) {
//   computerChoice = "paper";
// } else if (0.4 < computerChoice <= 0.6) {
//   computerChoice = "scissors";
// } else if (0.6 < computerChoice <= 0.8) {
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
  } else if (0.2 < computerChoice <= 0.4) {
    computerChoice = "paper";
  } else if (0.4 < computerChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (0.6 < computerChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Paper Covers Rock";
    loserCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Spock Vaporizes Rock";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Rock Crushes Scissors";
    winnerCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Rock Crushes Lizard";
    winnerCount += 1;
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
  } else if (0.2 < computerChoice <= 0.4) {
    computerChoice = "paper";
  } else if (0.4 < computerChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (0.6 < computerChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Scissors Cuts Paper";
    loserCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Lizard Eats Paper";
    loserCount += 1;
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Paper Covers Rock";
    winnerCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Paper Disproves Spock";
    winnerCount += 1;
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
  } else if (0.2 < computerChoice <= 0.4) {
    computerChoice = "paper";
  } else if (0.4 < computerChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (0.6 < computerChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Rock Crushes Scissors";
    loserCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Spock Smashes Scissors";
    loserCount += 1;
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Scissors Cuts Paper";
    winnerCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Scissors Decapitates Lizard";
    winnerCount += 1;
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
  } else if (0.2 < computerChoice <= 0.4) {
    computerChoice = "paper";
  } else if (0.4 < computerChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (0.6 < computerChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Rock Crushes Lizard";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Scissors Decapitates Lizard";
    loserCount += 1;
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Lizard Eats Paper";
    winnerCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Lizard Poisons Spock";
    winnerCount += 1;
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
  } else if (0.2 < computerChoice <= 0.4) {
    computerChoice = "paper";
  } else if (0.4 < computerChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (0.6 < computerChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
  console.log(computerChoice);

  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie! Go Again.";
    document.getElementById("result-explanation").innerHTML = "Draw";
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Paper Disproves Spock";
    loserCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Loser!";
    document.getElementById("result-explanation").innerHTML =
      "Lizard Poisons Spock";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Spock Smashes Scissors";
    winnerCount += 1;
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Winner!";
    document.getElementById("result-explanation").innerHTML =
      "Spock Vaporizes Rock";
    winnerCount += 1;
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
  });
