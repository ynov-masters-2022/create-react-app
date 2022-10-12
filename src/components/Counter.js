import { useState } from "react";
import CounterActions from "./CounterActions";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

  return (
    <p>
      Compteur : {counter}
      <CounterActions decrement={decrement} increment={increment} />
    </p>
  );
};

export default Counter;
