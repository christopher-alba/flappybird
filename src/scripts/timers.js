import { applyGravity } from "./animations";
import { endGame } from "./gamestate";

let gravityTimer;
let birdHeightTimer;

export const clearGravityTimer = () => {
  clearInterval(gravityTimer);
};
export const setGravityTimer = () => {
  gravityTimer = setInterval(() => {
    applyGravity();
  }, 50);
};
export const clearBirdHeightDetector = () => {
  clearInterval(birdHeightTimer);
};
export const setBirdHeightDetector = () => {
  birdHeightTimer = setInterval(() => {
    let flappyBird = document.getElementsByClassName("flappy-bird")[0];
    console.log(
      flappyBird.getBoundingClientRect().bottom 
    );
    if (flappyBird.getBoundingClientRect().bottom >= window.screen.height - 100) {
      endGame();
    }
  }, 50);
};
