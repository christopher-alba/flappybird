export const generatePipes = () => {
  let upperPipe = document.createElement("div");
  upperPipe.classList.add("pipe");
  upperPipe.classList.add("upper");

  let lowerPipe = document.createElement("div");
  lowerPipe.classList.add("pipe");
  lowerPipe.classList.add("lower");

  upperPipe.style.height = 200 + Math.random() * 300 + "px";
  lowerPipe.style.height =
    window.visualViewport.height -
    upperPipe.style.height.split("p")[0] -
    300 +
    "px";
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

export const clearAllPipes = () => {
  let pipes = document.getElementsByClassName("pipe");
  pipes = [...pipes];
  for (let i = 0; i < pipes.length; i++) {
    pipes[i].remove();
  }
};
