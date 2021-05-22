import React from "react";
import { startGame } from "../scripts/gamestate";
const Home = () => {
  return (
    <div className="main-menu">
      <div>Flappy Bird</div>
      <button
        onClick={() => {
          startGame();
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default Home;
