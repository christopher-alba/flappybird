import { jump } from "./animations";

export const addJumpEventListener = () => {
  document.addEventListener("keypress", onSpacebarPress);
};

const onSpacebarPress = (event) => {
  if (event.code === "Space") {
    jump();
  }
};
