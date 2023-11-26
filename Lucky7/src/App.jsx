import { useState } from "react";
import Dice from "./Dice";
import "./App.css";

function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [numDice, setNumDice] = useState(2);

  function rollDice() {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);
  }

  return (
    <>
      <h1>Lucky 7 Game</h1>
      <h3>{dice1 + dice2 === 7 ? "You win !!" : ""}</h3>
      <div className="dice-container">
        <Dice numDice={numDice} />
      </div>
      <div className="num-dice">
        <button onClick={() => setNumDice(numDice - 1)}>-</button>
        <p>Dice : {numDice}</p>
        <button onClick={() => setNumDice(numDice + 1)}>+</button>
      </div>
      <button className="roll-dice" onClick={rollDice}>
        Roll Dice
      </button>
    </>
  );
}

export default App;
