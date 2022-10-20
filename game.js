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
  let userInput = "rock";
  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie!";
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Winner!";
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Winner!";
  }
});
paperButton.addEventListener("click", function () {
  let userInput = "paper";
  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie!";
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Winner!";
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Winner!";
  }
});
scissorsButton.addEventListener("click", function () {
  let userInput = "scissors";
  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie!";
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Winner!";
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Winner!";
  }
});
lizardButton.addEventListener("click", function () {
  let userInput = "lizard";
  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie!";
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Winner!";
  } else if (computerChoice === "spock") {
    document.getElementById("result").innerHTML = "Winner!";
  }
});
spockButton.addEventListener("click", function () {
  let userInput = "spock";
  if (userInput === computerChoice) {
    document.getElementById("result").innerHTML = "Tie!";
  } else if (computerChoice === "paper") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "lizard") {
    document.getElementById("result").innerHTML = "Loser!";
  } else if (computerChoice === "scissors") {
    document.getElementById("result").innerHTML = "Winner!";
  } else if (computerChoice === "rock") {
    document.getElementById("result").innerHTML = "Winner!";
  }
});
