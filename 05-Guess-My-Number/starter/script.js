"use strict";

const num = Math.trunc(Math.random() * 20) + 1;

let score = 20;

console.log(num);
document.querySelector(".check").addEventListener("click", function () {
  const guessVal = Number(document.querySelector(".guess").value);

  if (!guessVal) {
    document.querySelector(".message").textContent = "⛔ Insert a number";
  } else if (guessVal > num) {
    document.querySelector(".message").textContent =
      " 📈 Guess number is too high";
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector(".message").textContent =
        "💥You have lost the game";
    }
  } else if (guessVal < num) {
    document.querySelector(".message").textContent =
      "📉 Guess number is too low";
    score--;
    document.querySelector(".score").textContent = score;

    if (score < 1) {
      document.querySelector(".message").textContent =
        "💥You have lost the game";
    }
  } else {
    document.querySelector(".message").textContent = " 🥳 Guessed Correctly";
    document.querySelector(".number").textContent = num;
  }
});
