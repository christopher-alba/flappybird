export const generatePipes = () => {
  console.log("testingA");
  let upperPipe = document.createElement("div");
  upperPipe.classList.add("pipe");
  upperPipe.classList.add("upper");

  let lowerPipe = document.createElement("div");
  lowerPipe.classList.add("pipe");
  lowerPipe.classList.add("lower");

  let gameArena = document.getElementsByClassName("game-arena")[0];
  gameArena.appendChild(upperPipe);
  gameArena.appendChild(lowerPipe);

  upperPipe.style.right = 100 + window.visualViewport.width + "px";
  lowerPipe.style.right = 100 + window.visualViewport.width + "px";
  setTimeout(() => {
    upperPipe.remove();
    lowerPipe.remove();
  }, 5500);
};
