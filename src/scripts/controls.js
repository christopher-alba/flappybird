import { jump } from "./animations";

let spaceOn = false;

export const addJumpEventListener = () => {
  document.addEventListener("keypress", onSpacebarPress);
  document.addEventListener("keyup", onSpacebarRelease);
};
export const clearJumpEventListener = () => {
  document.removeEventListener("keypress", onSpacebarPress);
  document.removeEventListener("keyup", onSpacebarRelease);
};

const onSpacebarPress = (event) => {
  if (event.code === "Space" && spaceOn === false) {
    jump();
    spaceOn = true;
  }
};
const onSpacebarRelease = (event) => {
  if (event.code === "Space" && spaceOn === true) {
    spaceOn = false;
  }
};
