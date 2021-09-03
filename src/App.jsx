import "./App.css";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const { background, z } = useSpring({
    background: toggle ? "red" : "green",
    y: !toggle ? 0 : 50,
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

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Test</button>
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
    </div>
  );
}

export default App;
