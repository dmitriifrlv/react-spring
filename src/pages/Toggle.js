import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, y } = useSpring({
    color: isToggled ? "tomato" : "green",
    y: isToggled ? 0 : -50,
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: y.to((y) => `translate3d(0, ${y}px, 0)`),
          color,
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

// const AnimatedTitle = animated(componentName);

export default Toggle;
