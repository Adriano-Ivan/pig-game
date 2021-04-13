"use strict";

const holdButton = document.getElementById("hold");
const rollDice = document.getElementById("roll-dice");
const imgDice = document.getElementById("img-show");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const player0Current = document.getElementById("score-display-0");
const player1Current = document.getElementById("score-display-1");
const totalPlayer0 = document.getElementById("total-display-0");
const totalPlayer1 = document.getElementById("total-display-1");
const newGameButton = document.getElementById("new-game");

let currentPlayer, totalScore, scores, playingSituation;

const regularSituation = function () {
  currentPlayer = 0;
  totalScore = 0;
  scores = [0, 0];
  playingSituation = true;

  player1.classList.add("active--player");
  player2.classList.add("inactive--player");
  player1.classList.remove("inactive--player");
  player2.classList.remove("active--player");
  player1.classList.remove("winner");
  player2.classList.remove("winner");

  imgDice.style.display = "none";

  player0Current.textContent = 0;
  player1Current.textContent = 0;

  totalPlayer0.textContent = 0;
  totalPlayer1.textContent = 0;
};

const changeActive = function () {
  player1.classList.toggle("active--player");
  player1.classList.toggle("inactive--player");
  player2.classList.toggle("active--player");
  player2.classList.toggle("inactive--player");
};

const changeSituationPlayer = function () {
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
};

rollDice.addEventListener("click", function () {
  if (playingSituation) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    imgDice.style.display = "block";
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
      changeSituationPlayer();
    }
  }
});

holdButton.addEventListener("click", function () {
  if (playingSituation) {
    scores[currentPlayer] += totalScore;

    if (currentPlayer === 0) {
      totalPlayer0.textContent = scores[currentPlayer];
    } else {
      totalPlayer1.textContent = scores[currentPlayer];
    }

    let jog;

    if (scores[currentPlayer] < 100) {
      changeSituationPlayer();
    } else {
      if (currentPlayer === 0) {
        player1.classList.add("winner");
        player1.classList.toggle("active--player");
        jog = 0;
      } else {
        player2.classList.add("winner");
        player2.classList.toggle("active--player");
        jog = 1;
      }
      playingSituation = false;

      if (jog === 0) {
        alert(
          "O jogador da esquerda ganhou ! Vamos começar outro jogo ? Aperte em 'New Game' !"
        );
      } else {
        alert(
          "O jogador da direita ganhou ! Vamos começar outro jogo ? Aperte em 'New Game' !"
        );
      }
    }
  }
});

newGameButton.addEventListener("click", regularSituation);

regularSituation();
