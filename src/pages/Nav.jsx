import React from "react";
import { Link } from "react-router-dom";
import { animated } from "@react-spring/web";
export const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Store</Link>
        <Link to="">Tutorial</Link>
      </nav>
    </animated.div>
  );
};
