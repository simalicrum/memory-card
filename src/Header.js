import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>Cat Memory Game</h1>
      <h2>Current Score: {props.score}</h2>
      <h2>High Score : {props.highScore}</h2>
    </div>
  );
};

export default Header;
