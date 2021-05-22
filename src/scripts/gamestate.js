import { addJumpEventListener, clearJumpEventListener } from "./controls";
import {
  clearBirdHeightDetector,
  clearGravityTimer,
  clearNewPipesTimer,
  setBirdHeightDetector,
  setGravityTimer,
  setNewPipesTimer,
} from "./timers";

export const startGame = () => {
  document.getElementsByClassName("main-menu")[0].style.display = "none";
  let flappybird = document.createElement("img");
  flappybird.src = "./flappybird.png";
  flappybird.classList.add("flappy-bird");
  let gameArena = document.getElementsByClassName("game-arena")[0];
  gameArena.appendChild(flappybird);
  setGravityTimer();
  setBirdHeightDetector();
  addJumpEventListener();
  setNewPipesTimer();
};

export const endGame = () => {
  document.getElementsByClassName("main-menu")[0].style.display = "block";
  let flappyBird = document.getElementsByClassName("flappy-bird")[0];
  flappyBird.remove();
  clearGravityTimer();
  clearJumpEventListener();
  clearBirdHeightDetector();
  clearNewPipesTimer();
};
