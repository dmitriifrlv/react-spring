import { useTransition, animated, config } from "react-spring";
import { useState } from "react";

export function Transitions() {
  const [toggle, setToggle] = useState(false);
  const transitions = useTransition(toggle, {
    key: 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // config: config.gentle,
    // reverse: toggle,
    // delay: 200,
    // onRest: () => setToggle(!toggle),
  });
  console.log(toggle);
  return (
    <div className="App">
      <button className="testBtn" onClick={() => setToggle(!toggle)}>
        Test
      </button>
      <div className="container">
        {transitions((styles, item, t, i) => {
          console.log(t, i);
          return item ? (
            <animated.p key="1" style={{ styles }}>
              Just some text
            </animated.p>
          ) : (
            <animated.p key="1" style={{ styles }}>
              WoW!
            </animated.p>
          );
        })}
      </div>
    </div>
  );
}
