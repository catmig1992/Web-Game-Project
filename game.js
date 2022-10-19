let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");

let userInput = document.querySelector(".user-input");
let computerOutput = document.querySelector(".computer-output");

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

rockButton.addEventListener("click", function () {
  userInput.innerHTML = "You selected rock.";
});
paperButton.addEventListener("click", function () {
  userInput.innerHTML = "You selected paper.";
});
scissorsButton.addEventListener("click", function () {
  userInput.innerHTML = "You selected scissors.";
});
lizardButton.addEventListener("click", function () {
  userInput.innerHTML = "You selected lizard.";
});
spockButton.addEventListener("click", function () {
  userInput.innerHTML = "You selected Spock.";
});
