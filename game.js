let winnerCount = 0;
let loserCount = 0;

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
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});
document.getElementById("paper").addEventListener("click", function () {
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
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});
document.getElementById("scissors").addEventListener("click", function () {
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
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});
document.getElementById("lizard").addEventListener("click", function () {
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
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});
document.getElementById("spock").addEventListener("click", function () {
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
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Loser!";
    loserCount += 1;
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Winner!";
    winnerCount += 1;
  }
  document.getElementById("user-total").textContent = winnerCount;
  document.getElementById("computer-total").textContent = loserCount;
});

document
  .getElementById("clear-scoreboard")
  .addEventListener("click", function () {
    winnerCount = 0;
    loserCount = 0;
    document.getElementById("user-total").innerText = 0;
    document.getElementById("computer-total").innerText = 0;
  });
