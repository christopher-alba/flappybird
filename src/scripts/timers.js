import { applyGravity } from "./animations";

export let gravityTimer;
export const clearGravityTimer = () => {
  clearInterval(gravityTimer);
};
export const setGravityTimer = () => {
  gravityTimer = setInterval(() => {
    applyGravity();
  }, 50);
};
