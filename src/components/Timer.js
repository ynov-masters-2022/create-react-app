import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [state, setState] = useState({ seconds: 0 });
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(
      () => setState({ seconds: state.seconds + 1 }),
      1000
    );

    return () => clearInterval(interval.current);
  }, [state.seconds]);

  return <div>Seconds : {state.seconds}</div>;
};

export default Timer;
