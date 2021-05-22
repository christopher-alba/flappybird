import { applyGravity } from "./animations";
import { endGame } from "./gamestate";
import { generatePipes } from "./pipes";

let gravityTimer;
let birdHeightTimer;
let newPipesTimer;
let collisionTimer;

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
export const clearDetectCollisionTimer = () => {
  clearInterval(collisionTimer);
};
export const setDetectCollisionTimer = () => {
  collisionTimer = setInterval(() => {
    let flappyBird = document.getElementsByClassName("flappy-bird")[0];
    let pipes = document.getElementsByClassName("pipe");

    for (let i = 0; i < pipes.length; i++) {
      let pipe = pipes[i];
      if (
        flappyBird.getBoundingClientRect().x <
          pipe.getBoundingClientRect().x + pipe.getBoundingClientRect().width &&
        flappyBird.getBoundingClientRect().x +
          flappyBird.getBoundingClientRect().width >
          pipe.getBoundingClientRect().x &&
        flappyBird.getBoundingClientRect().y <
          pipe.getBoundingClientRect().y +
            pipe.getBoundingClientRect().height &&
        flappyBird.getBoundingClientRect().y +
          flappyBird.getBoundingClientRect().height >
          pipe.getBoundingClientRect().y
      ) {
        endGame();
      }
    }
  });
};
