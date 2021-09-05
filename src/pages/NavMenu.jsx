import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Toggle from "./Toggle";
import { Nav } from "./Nav";
import { Checkout } from "./Checkout";

export default function NavMenu() {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`,
  });
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Toggle />
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  );
}
