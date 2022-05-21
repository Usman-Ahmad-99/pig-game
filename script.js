'use strict';

'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');
// const diceImg = document.querySelector('.dice');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const btnNew = document.querySelector('.btn--new');
// let currentScore = 0;
// let currentPlayer = 0;
// const scores = [0, 0];
// let playing = true;

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceImg.classList.add('hidden');

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6 + 1);

//     diceImg.src = `dice-${dice}.png`;
//     diceImg.classList.remove('hidden');

//     if (dice === 1) {
//       currentScore = 0;
//       document.getElementById(`current--${currentPlayer}`).textContent =
//         currentScore;

//       currentPlayer = currentPlayer === 0 ? 1 : 0;
//       player0.classList.toggle('player--active');
//       player1.classList.toggle('player--active');
//     } else {
//       currentScore += dice;
//       document.getElementById(`current--${currentPlayer}`).textContent =
//         currentScore;
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[currentPlayer] += currentScore;
//     document.querySelector(`#score--${currentPlayer}`).textContent =
//       scores[currentPlayer];

//     if (scores[currentPlayer] >= 20) {
//       document
//         .querySelector(`.player--${currentPlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${currentPlayer}`)
//         .classList.remove('player--active');
//       playing = false;
//       diceImg.classList.add('hidden');
//     } else {
//       currentScore = 0;
//       document.getElementById(`current--${currentPlayer}`).textContent =
//         currentScore;
//       currentPlayer = currentPlayer === 0 ? 1 : 0;
//       player0.classList.toggle('player--active');
//       player1.classList.toggle('player--active');
//     }
//   }
// });

// btnNew.addEventListener('click', function () {
//   playing = true;
//   scores[0] = 0;
//   scores[1] = 0;
//   currentScore = 0;
//   document
//     .querySelector(`.player--${currentPlayer}`)
//     .classList.remove('player--winner');
//   currentPlayer = 0;
//   document.getElementById(`current--0`).textContent = currentScore;
//   document.getElementById(`current--1`).textContent = currentScore;
//   document.querySelector(`#score--0`).textContent = scores[currentPlayer];
//   document.querySelector(`#score--1`).textContent = scores[currentPlayer];
//   player0.classList.add('player--active');
//   player1.classList.remove('player--active');

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   diceImg.classList.add('hidden');
// });

// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const totalScorePlOne = document.getElementById('score--0');
// const totalScorePlTwo = document.getElementById('score--1');
// const currentScorePlOne = document.getElementById('current--0');
// const currentScorePlTwo = document.getElementById('current--1');
// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');
// const diceImg = document.querySelector('.dice');
// let currentScore;
// let currentPlayer;
// let totalScore = [0, 0];
// let playing;

// const initialReset = function () {
//   totalScorePlOne.textContent = 0;
//   totalScorePlTwo.textContent = 0;
//   diceImg.classList.add('hidden');
//   currentScorePlOne.textContent = 0;
//   currentScorePlTwo.textContent = 0;
//   currentScore = 0;
//   currentPlayer = 0;
//   playing = true;
// };

// initialReset();

// btnNew.addEventListener('click', function () {
//   //reset all things.
//   initialReset();
//   totalScore = [0, 0];
//   player0.classList.add('player--active');
//   player1.classList.remove('player--active');
//   player0.classList.remove('player--winner');
//   player1.classList.remove('player--winner');
// });

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     //roll dice
//     //generate a number between 1 and 6
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);
//     //set the dice image to dice number and unhide it.
//     diceImg.classList.remove('hidden');
//     diceImg.src = `dice-${dice}.png`;

//     //keep adding dice numbers to a score
//     currentScore += dice;
//     document.getElementById(`current--${currentPlayer}`).textContent =
//       currentScore;

//     if (dice === 1) {
//       document.getElementById(`current--${currentPlayer}`).textContent = 0;
//       currentPlayer = currentPlayer === 0 ? 1 : 0;
//       currentScore = 0;
//       diceImg.classList.add('hidden');
//       player0.classList.toggle('player--active');
//       player1.classList.toggle('player--active');
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     //add current to total
//     totalScore[currentPlayer] += currentScore;
//     document.getElementById(`score--${currentPlayer}`).textContent =
//       totalScore[currentPlayer];

//     if (totalScore[currentPlayer] > 10) {
//       document
//         .querySelector(`.player--${currentPlayer}`)
//         .classList.add('player--winner');
//       playing = false;
//       return;
//     }

//     document.getElementById(`current--${currentPlayer}`).textContent = 0;
//     //change current player.
//     currentPlayer = currentPlayer === 0 ? 1 : 0;
//     currentScore = 0;
//     diceImg.classList.add('hidden');
//     player0.classList.toggle('player--active');
//     player1.classList.toggle('player--active');
//   }
// });
