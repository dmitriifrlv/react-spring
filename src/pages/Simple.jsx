import { useSpring, animated, config } from "react-spring";
import { useState } from "react";

export function Simple() {
  const [toggle, setToggle] = useState(false);
  const { background, z } = useSpring({
    background: toggle ? "red" : "green",
    z: !toggle ? 0 : 150,
  });

  const props = useSpring({
    from: {
      borderRadius: "0",
    },
    to: {
      borderRadius: " 50%",
    },
    config: config.gentle,
  });

  const { y } = useSpring({
    y: toggle ? 0 : 1,
    config: config.stiff,
  });
  return (
    <div className="App">
      <button className="testBtn" onClick={() => setToggle(!toggle)}>
        Test
      </button>
      <div className="container">
        <animated.div
          className="rectangle"
          style={{
            background,
            transform: z.to((z) => `translate3d(${z}px, ${z}px, 0)`),
          }}
        >
          I will fade in
        </animated.div>

        <animated.div className="rectangle" style={props}></animated.div>
      </div>

      <animated.p
        className="text"
        style={{
          transform: y
            .to({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, -25, +25, -50, 0],
            })
            .to((y) => `translate3d(0, ${y}px, 0)`),
        }}
      >
        Just some text
      </animated.p>
    </div>
  );
}
