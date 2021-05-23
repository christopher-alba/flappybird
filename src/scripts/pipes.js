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
  lowerPipe.style.background = `url("./pipe.png")`;
  upperPipe.style.background = `url("./pipeupper.png")`;

  lowerPipe.style.backgroundRepeat = "no-repeat";
  lowerPipe.style.backgroundSize = "100% 100%";

  upperPipe.style.backgroundRepeat = "no-repeat";
  upperPipe.style.backgroundSize = "100% 100%";
  let scaleFactor = 1;
  if (window.visualViewport.width < 800) {
    scaleFactor = 2;
  }
  upperPipe.style.transition =
    scaleFactor * 5000 * (window.visualViewport.width / 1920) + "ms linear";
  lowerPipe.style.transition =
    scaleFactor * 5000 * (window.visualViewport.width / 1920) + "ms linear";

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
