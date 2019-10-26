import "./App.css";
import React, { useState, useEffect } from "react";

// Data
import allCards from "./data";

// Utils
import { shuffle } from "./utils";

// Components
import Card from "./Components/Card";

const App = () => {
  const [cards, setCards] = useState([]);
  const [difficulty, setDifficulty] = useState("easy"); //1

  //Used to duplicate the amount of cards since we need two of each and shuffle them using the function defined at the top
  let cardsTemp = allCards;
  switch (difficulty) {
    case "easy":
      cardsTemp = allCards.slice(0, 6);
      break;
    case "medium":
      cardsTemp = allCards.slice(0, 8);
      break;
    default:
      break;
  }

  setCards(() => shuffle([...cardsTemp, ...cardsTemp])); //2

  //Mapping through the array of cards and placing them in the card component
  const cardList = cards.map((card, idx) => (
    <Card key={`${card.id}-${idx}`} card={card} />
  ));

  return (
    <div className="App border my-5">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row border">{cardList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
