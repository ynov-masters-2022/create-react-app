import { useState } from "react";
import CounterActions from "./CounterActions";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);
  const addTwo = () => {
    setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  return (
    <p>
      Compteur : {counter}
      <CounterActions decrement={decrement} increment={increment} />
      <button onClick={addTwo}>Add two</button>
    </p>
  );
};

export default Counter;
