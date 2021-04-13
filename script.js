"use strict";

const rollDice = document.getElementById("roll-dice");
const imgDice = document.getElementById("img-show");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const player0Current = document.getElementById("score-display-0");
const player1Current = document.getElementById("score-display-1");

let currentPlayer = 0;
let totalScore = 0;

const changeActive = function () {
  player1.classList.toggle("active--player");
  player1.classList.toggle("inactive--player");
  player2.classList.toggle("active--player");
  player2.classList.toggle("inactive--player");
};

rollDice.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  imgDice.src = `dice-${dice}.png`;

  if (dice !== 1) {
    if (currentPlayer === 0) {
      totalScore += dice;
      player0Current.textContent = totalScore;
    } else {
      totalScore += dice;
      player1Current.textContent = totalScore;
    }
  } else {
    if (currentPlayer === 0) {
      player0Current.textContent = 0;
    } else {
      player1Current.textContent = 0;
    }

    currentPlayer = currentPlayer === 0 ? 1 : 0;
    totalScore = 0;

    if (player1.classList.contains("active--player")) {
      changeActive();
    } else {
      changeActive();
    }
  }
});
