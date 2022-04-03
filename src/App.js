import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard/SingleCard";

const cardImages = [
  {
    src: "/img/helmet-1.png",
    matched: false,
  },
  {
    src: "/img/potion-1.png",
    matched: false,
  },
  {
    src: "/img/ring-1.png",
    matched: false,
  },
  {
    src: "/img/scroll-1.png",
    matched: false,
  },
  {
    src: "/img/shield-1.png",
    matched: false,
  },
  {
    src: "/img/sword-1.png",
    matched: false,
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
  };

  const setMatchedCards = () => {
    setCards((prev) =>
      prev.map((card) => {
        if (card.src === choiceOne.src) {
          return { ...card, matched: true };
        }
        return card;
      })
    );
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setMatchedCards();
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.length &&
          cards.map((card) => (
            <SingleCard handleChoice={handleChoice} key={card.id} {...card} />
          ))}
      </div>
    </div>
  );
}

export default App;
