import React from "react";
import { startGame } from "../scripts/gamestate";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="game-arena">
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
      </div>
    </>
  );
};

export default Home;
