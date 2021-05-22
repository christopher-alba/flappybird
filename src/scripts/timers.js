import { applyGravity } from "./animations";
import { endGame } from "./gamestate";
import { generatePipes } from "./pipes";

let gravityTimer;
let birdHeightTimer;
let newPipesTimer;

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
    if (
      flappyBird.getBoundingClientRect().bottom >= window.visualViewport.height
    ) {
      endGame();
    }
  }, 50);
};

export const clearNewPipesTimer = () => {
  clearInterval(newPipesTimer);
};
export const setNewPipesTimer = () => {
  newPipesTimer = setInterval(() => {
    generatePipes();
  }, 1500);
};