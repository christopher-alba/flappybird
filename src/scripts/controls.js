import { jump } from "./animations";

let pressed = false;

export const addJumpEventListener = () => {
  document.addEventListener("mousedown", onPress);
  document.addEventListener("mouseup", onRelease);   
};
export const clearJumpEventListener = () => {
  document.removeEventListener("mousedown", onPress);
  document.removeEventListener("mouseup", onRelease);
};

const onPress = () => {
  if (pressed === false) {
    jump();
    pressed = true;
  }
};
const onRelease = () => {
  if (pressed === true) {
    pressed = false;
  }
};
