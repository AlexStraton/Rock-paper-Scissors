const computerChoiceDisplay = document.getElementById("computer_choice");
const yourChoiceDisplay = document.getElementById("your_choice");
const possibleChoices = document.querySelectorAll(".button");
const resultDisplay = document.getElementById("result");
const reset = document.getElementById("reset");
let userChoice;
let compChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.textContent = userChoice;
    computerChoice();
  })
);

function computerChoice() {
  const randomNumber = Math.trunc(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 0) {
    compChoice = "scissors";
  } else if (randomNumber === 1) {
    compChoice = "rock";
  } else if (randomNumber === 2) {
    compChoice = "paper";
  }
  computerChoiceDisplay.textContent = compChoice;
  winner();
}

function winner() {
  if (userChoice === compChoice) {
    resultDisplay.textContent = `It's a draw! You have both chosen ${userChoice}!`;
  } else if (userChoice === "rock" && compChoice === "paper") {
    resultDisplay.textContent = `You lost! ${compChoice} covers ${userChoice}!`;
  } else if (userChoice === "paper" && compChoice === "scissors") {
    resultDisplay.textContent = `You lost! ${compChoice} cuts ${userChoice}!`;
  } else if (userChoice === "scissors" && compChoice === "rock") {
    resultDisplay.textContent = `You lost! ${compChoice} smashes ${userChoice}!`;
  } else if (userChoice === "rock" && compChoice === "scissors") {
    resultDisplay.textContent = `You win! ${userChoice} smashes ${compChoice}!`;
  } else if (userChoice === "paper" && compChoice === "rock") {
    resultDisplay.textContent = `You win! ${userChoice} covers ${compChoice}!`;
  } else if (userChoice === "scissors" && compChoice === "paper") {
    resultDisplay.textContent = `You win! ${userChoice} cuts ${compChoice}!`;
  }
}

reset.addEventListener("click", function () {
  computerChoiceDisplay.innerHTML = "";
  yourChoiceDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
});
