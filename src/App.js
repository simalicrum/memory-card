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

  const randomizeCats = () => {
    setCats(randomizeArray(cats));
  };
  const randomizeArray = (array) => {
    const randomIndex = randomizeRange(array.length);
    return randomIndex.map((i) => array[i]);
  };

  const renderCats = () => {
    return randomizeRange(cats.length).map((i) => {
      return (
        <div
          onClick={() => {
            randomizeCats();
          }}
        >
          <Card catname={cats[i]} />
        </div>
      );
    });
  };
  return (
    <div>
      <Header />
      {renderCats()}
    </div>
  );
};

export default App;
