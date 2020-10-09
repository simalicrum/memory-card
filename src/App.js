import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";

const App = () => {
  const [cats, setCats] = useState([
    "Yin",
    "Yang",
    "Punkle",
    "Mr. Black",
    "Mr. Grey",
  ]);
  const [clickedCats, setClickedCats] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const randomizeRange = (length) => {
    let numbers = [Math.floor(Math.random() * length)];
    let j = Math.floor(Math.random() * length);
    for (let k = 0; k < length - 1; k++) {
      while (numbers.some((i) => i === j)) {
        j = Math.floor(Math.random() * length);
      }
      numbers.push(j);
    }
    return numbers;
  };
  useEffect(() => {
    randomizeCats();
  }, []);
  const randomizeCats = () => {
    setCats(randomizeArray(cats));
  };
  const randomizeArray = (array) => {
    const randomIndex = randomizeRange(array.length);
    return randomIndex.map((i) => array[i]);
  };
  const checkClicks = (cat) => {
    if (clickedCats.some((i) => cat === i)) {
      setClickedCats([]);
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
    } else {
      setClickedCats(clickedCats.concat(cat));
      setScore(score + 1);
    }
  };
  const renderCats = () => {
    return cats.map((i) => {
      return (
        <div
          onClick={() => {
            checkClicks(i);
            randomizeCats();
          }}
        >
          <Card catname={i} />
        </div>
      );
    });
  };
  return (
    <div>
      <Header score={score} highScore={highScore} />
      {renderCats()}
    </div>
  );
};

export default App;
