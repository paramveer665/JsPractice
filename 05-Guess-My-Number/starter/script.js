"use strict";
document.querySelector(".check").addEventListener("click", function () {
  const guessVal = Number(document.querySelector(".guess").value);

  if (!guessVal) {
    document.querySelector(".message").textContent = "⛔ Insert a number";
  }
  // else if(guess>){
  //   docu
  // }
});
