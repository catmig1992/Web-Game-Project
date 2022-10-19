let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");

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
  console.log("Rock was chosen!");
});
paperButton.addEventListener("click", function () {
  console.log("Paper was chosen!");
});
scissorsButton.addEventListener("click", function () {
  console.log("Scissors was chosen!");
});
lizardButton.addEventListener("click", function () {
  console.log("Lizard was chosen!");
});
spockButton.addEventListener("click", function () {
  console.log("Spock was chosen!");
});
