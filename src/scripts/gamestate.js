import { addJumpEventListener, clearJumpEventListener } from "./controls";
import { clearBirdHeightDetector, clearGravityTimer, setBirdHeightDetector, setGravityTimer } from "./timers";

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
};

export const endGame = () => {
    console.log("testing");
  document.getElementsByClassName("main-menu")[0].style.display = "block";
  clearGravityTimer();
  clearJumpEventListener();
  clearBirdHeightDetector();
};
