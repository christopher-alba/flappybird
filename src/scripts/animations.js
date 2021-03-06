import { clearGravityTimer, setGravityTimer } from "./timers";

export const applyGravity = () => {
  let flappyBird = document.getElementsByClassName("flappy-bird")[0];
  if (
    flappyBird &&
    flappyBird.getBoundingClientRect().top < window.visualViewport.height
  ) {
    flappyBird.style.top = flappyBird.getBoundingClientRect().top + 30 + "px";
  }
};

export const jump = () => {
  let flappyBird = document.getElementsByClassName("flappy-bird")[0];
  if (flappyBird.getBoundingClientRect().top > 150) {
    clearGravityTimer();
    flappyBird.style.top = flappyBird.getBoundingClientRect().top - 100 + "px";
    flappyBird = document.getElementsByClassName("flappy-bird")[0];
    if (flappyBird) {
      setTimeout(setGravityTimer, 50);
    }
  }
};

export const animatePipes = () => {};
