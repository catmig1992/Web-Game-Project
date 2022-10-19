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
