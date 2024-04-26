'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
console.log(num);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessVal = Number(document.querySelector('.guess').value);

  if (!guessVal) {
    document.querySelector('.message').textContent = '⛔ Insert a number';
  }
  ///if guess is high
  else if (guessVal > num) {
    document.querySelector('.message').textContent =
      ' 📈 Guess number is too high';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        '💥You have lost the game';
    }

    ///if guess is low
  } else if (guessVal < num) {
    document.querySelector('.message').textContent =
      '📉 Guess number is too low';
    score--;
    document.querySelector('.score').textContent = score;

    if (score < 1) {
      document.querySelector('.message').textContent =
        '💥You have lost the game';
    }
    ///If guessed correctly
  } else {
    document.querySelector('.message').textContent = ' 🥳 Guessed Correctly';
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
  document.querySelector('.message').textContent = 'Start guessing again...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(num);
});
