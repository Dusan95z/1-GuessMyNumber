const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// check button functionality
checkBtn.addEventListener('click', (e) => {
  const guess = +guessEl.value;
  // no input
  if (!guess) {
    displayMessage('No number!');
    // correct guess
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    guessEl.disabled = true;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    // wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('You lost the game!');
      scoreEl.textContent = 0;
      guessEl.disabled = true;
    }
  }
});

// again button functionality
againBtn.addEventListener('click', (e) => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  number.textContent = '?';
  guessEl.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  guessEl.disabled = false;
});

// message function
function displayMessage(msg) {
  message.textContent = msg;
}
