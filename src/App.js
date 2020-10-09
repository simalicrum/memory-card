import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";

const App = () => {
  const [cats, setCats] = useState([
    { name: "Ann", picture: "Ann.jpg" },
    { name: "Daisy", picture: "Daisy.jpg" },
    { name: "Juniper", picture: "Juniper.jpg" },
    { name: "Koshenya", picture: "Koshenya.jpg" },
    { name: "Pebbles", picture: "Pebbles.jpg" },
    { name: "Punkle", picture: "Punkle.JPG" },
    { name: "Storm", picture: "Storm.jpg" },
    { name: "Supurr", picture: "Supurr.jpg" },
    { name: "Yang", picture: "Yang.jpg" },
    { name: "Yin", picture: "Yin.jpg" },
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
            checkClicks(i.name);
            randomizeCats();
          }}
        >
          <Card catname={i.name} catpicture={i.picture} />
        </div>
      );
    });
  };
  return (
    <div>
      <Header score={score} highScore={highScore} />
      <div id="cats">{renderCats()}</div>
    </div>
  );
};

export default App;
