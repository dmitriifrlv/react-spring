import { useTransition, animated, config } from "react-spring";
import { useState } from "react";

export function TransitionArray() {
  const [items, setItems] = useState([
    {
      letter: "A",
      key: 1,
    },
    {
      letter: "B",
      key: 2,
    },
    {
      letter: "C",
      key: 3,
    },
  ]);
  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="App">
      <button onClick={() => setItems({ letter: "D", key: 1 })}>Toggle</button>
      <div className="container">
        {transitions((styles, item, t, i) => (
          <animated.p style={{ styles }}>{item.letter}</animated.p>
        ))}
      </div>
    </div>
  );
}
