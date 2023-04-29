import { useState } from "react";
import "./App.css";

const hands = {
  ROCK : { name: "Rock", symbol:"👊", beats: "Scissors" },
  PAPER : { name: "Paper", symbol:"✋", beats: "Rock" },
  SCISSORS : { name: "Scissors", symbol:"✌️", beats: "Paper" },
  DEFAULT: { name: "-", symbol:"🤷‍♂️", beats: "-" }
}

function App() {
  let [playerHand, setPlayerHand] = useState(hands.DEFAULT);
  let [computerHand, setComputerHand] = useState(hands.DEFAULT);
  let [playerScore, setPlayerScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);

  let updateHand = (updatedPlayerHand) => {
    // create random rand value for computer hand
    const updatedComputerHand = [hands.ROCK, hands.PAPER, hands.SCISSORS][
      parseInt(Math.random() * 3)
    ];

    // update state for player and computer hand
    setPlayerHand(updatedPlayerHand);
    setComputerHand(updatedComputerHand);


    // update score based on who won current round
    if (updatedPlayerHand.beats === updatedComputerHand.name) {
      setPlayerScore(playerScore + 1);
    } else if (updatedComputerHand.beats === updatedPlayerHand.name) {
      setComputerScore(computerScore + 1);
    }

  };

  return (
    <div className="App">
      <div className="handSymbols">
        <h1 className="symbol">{playerHand.symbol}</h1>
        <h1 className="symbol">{computerHand.symbol}</h1>
      </div>

      <div className="scores">
        <p className="scoreText">Score</p>
        <p className="scoreText">{playerScore + " / " + computerScore}</p>
      </div>

      <div className="handTexts">
        <div className="handText">
          <p className="handTextItem">You Chose</p>
          <p className="handTextItem">{playerHand.name}</p>
        </div>
        <div className="handText">
          <p className="handTextItem">Computer Chose</p>
          <p className="handTextItem">{computerHand.name}</p>
        </div>
      </div>

      <div className="actionButtons">
        <button className="actionButton"
          onClick={() => {
            updateHand(hands.ROCK);
          }}
        >
          Rock
        </button>
        <button className="actionButton"
          onClick={() => {
            updateHand(hands.PAPER);
          }}
        >
          Paper
        </button>
        <button className="actionButton"
          onClick={() => {
            updateHand(hands.SCISSORS);
          }}
        >
          Scissors
        </button>
      </div>
    </div>
  );
}

export default App;
