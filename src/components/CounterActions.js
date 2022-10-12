const CounterActions = ({ decrement, increment }) => (
  <span>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </span>
);

export default CounterActions;
