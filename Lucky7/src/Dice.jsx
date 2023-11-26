function Dice({ numDice = 2 }) {
  const diceImages = [];

  for (let i = 0; i < numDice; i++) {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceImages.push(
      <img
        key={i}
        src={`../images/dice${diceValue}.png`}
        alt={`Dice ${diceValue}`}
      />
    );
  }

  return <>{diceImages}</>;
}

export default Dice;
