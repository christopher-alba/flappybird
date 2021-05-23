import { addJumpEventListener, clearJumpEventListener } from "./controls";
import { clearAllPipes } from "./pipes";
import {
  clearBirdHeightDetector,
  clearDetectCollisionTimer,
  clearGravityTimer,
  clearNewPipesTimer,
  clearScoreTimer,
  setBirdHeightDetector,
  setDetectCollisionTimer,
  setGravityTimer,
  setNewPipesTimer,
  setScoreTimer,
} from "./timers";
let score = 0;
export const startGame = () => {
  clearGravityTimer();
  document.getElementsByClassName("main-menu")[0].style.display = "none";
  document.getElementsByClassName("score")[0].style.visibility = "visible";
  let flappybird = document.createElement("img");
  flappybird.src = "./flappybird.png";
  flappybird.classList.add("flappy-bird");
  let gameArena = document.getElementsByClassName("game-arena")[0];
  gameArena.appendChild(flappybird);
  setGravityTimer();
  setBirdHeightDetector();
  addJumpEventListener();
  setNewPipesTimer();
  setDetectCollisionTimer();
  setScoreTimer();
};

export const endGame = () => {
  document.getElementsByClassName("game-over")[0].style.display = "block";
  document.getElementsByClassName("final-score")[0].innerHTML =
    "Final Score: " + score;
  document.getElementsByClassName("score")[0].style.visibility = "hidden";
  let flappyBird = document.getElementsByClassName("flappy-bird")[0];
  flappyBird.remove();
  clearGravityTimer();
  clearJumpEventListener();
  clearBirdHeightDetector();
  clearNewPipesTimer();
  clearAllPipes();
  clearDetectCollisionTimer();
  clearScoreTimer();
  score = 0;
  document.getElementsByClassName("score")[0].innerHTML = "Score: " + score;
};

export const mainMenu = () => {
  document.getElementsByClassName("game-over")[0].style.display = "none";
  document.getElementsByClassName("main-menu")[0].style.display = "block";
}

export const incrementScore = () => {
  score += 1;
  document.getElementsByClassName("score")[0].innerHTML = "Score: " + score;
};