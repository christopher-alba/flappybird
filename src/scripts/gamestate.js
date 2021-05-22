import { addJumpEventListener } from "./controls";
import { setGravityTimer } from "./timers";

export const startGame = () => {
  document.getElementsByClassName("main-menu")[0].style.display = "none";
  let flappybird = document.createElement("img");
  flappybird.src = "./flappybird.png";
  flappybird.classList.add("flappy-bird");
  let gameArena = document.getElementsByClassName("game-arena")[0];
  gameArena.appendChild(flappybird);
  setGravityTimer();
  addJumpEventListener();
};

export const endGame = () => {
  document.getElementsByClassName("main-menu")[0].style.display = "block";
};
