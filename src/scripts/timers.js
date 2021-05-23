import { applyGravity } from "./animations";
import { endGame, incrementScore } from "./gamestate";
import { generatePipes } from "./pipes";

let gravityTimer;
let birdHeightTimer;
let newPipesTimer;
let collisionTimer;
let scoreTimer;

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
  let scaleFactor = 1;
  if(window.visualViewport.width < 800){
    scaleFactor = 4;
  }
  newPipesTimer = setInterval(() => {
    generatePipes();
  }, scaleFactor*1500*((window.visualViewport.width)/1920));
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
  }, 100);
};
export const clearScoreTimer = () => {
  clearInterval(scoreTimer);
};
export const setScoreTimer = () => {
  scoreTimer = setInterval(() => {
    let flappyBird = document.getElementsByClassName("flappy-bird")[0];
    let pipes = document.getElementsByClassName("pipe");
    for (let i = 0; i < pipes.length; i++) {
      let pipe = pipes[i];
      if (
        pipe.getBoundingClientRect().left <
        flappyBird.getBoundingClientRect().left && 
        pipe.getBoundingClientRect().right <
        flappyBird.getBoundingClientRect().right
      ) {
        incrementScore();
        return;
      }
    }
  },1500);
};
