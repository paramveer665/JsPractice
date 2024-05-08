'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
console.log(num);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessVal = Number(document.querySelector('.guess').value);

  if (!guessVal) {
    displayMessage('⛔ Insert a number');
  }

  // if guess is different from secret number
  else if (guessVal !== num) {
    displayMessage(
      guessVal > num
        ? ' 📈 Guess number is too high'
        : '📉 Guess number is too low'
    );

    score--;
    document.querySelector('.score').textContent = score;
  }

  ///if guess is high
  // else if (guessVal > num) {
  //   document.querySelector('.message').textContent =
  //     ' 📈 Guess number is too high';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   if (score < 1) {
  //     document.querySelector('.message').textContent =
  //       '💥You have lost the game';
  //   }

  //   ///if guess is low
  // } else if (guessVal < num) {
  //   document.querySelector('.message').textContent =
  //     '📉 Guess number is too low';
  //   score--;
  //   document.querySelector('.score').textContent = score;

  //   if (score < 1) {
  //     document.querySelector('.message').textContent =
  //       '💥You have lost the game';
  //   }
  ///If guessed correctly
  // }
  else {
    displayMessage(' 🥳 Guessed Correctly');
    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

///again button

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing again...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(num);
});
