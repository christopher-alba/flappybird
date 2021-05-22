import React from "react";
import { startGame, mainMenu } from "../scripts/gamestate";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="game-arena">
        <div className="main-menu">
          <h1>Flappy Bird</h1>
          <h2>press spacebar to jump!</h2>
          <h2>dodge the pipes to get points</h2>
          <button
            onClick={() => {
              startGame();
            }}
          >
            Start Game
          </button>
        </div>
        <h1 className="score">Score: 0</h1>
        <div className="game-over">
          <h1>Game Over</h1>
          <h2 className="final-score">Final Score: 0</h2>
          <button
            onClick={() => {
              mainMenu();
            }}
          >
            Main Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
