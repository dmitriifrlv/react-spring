import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
  });
  return (
    <div
      className="checkout"
      style={{
        pointerEvents: isOpen ? "all" : "none",
      }}
    >
      <animated.div
        style={{
          transform: x.to((x) => `translate3d(${x * -1}%, 0, 0)`),
        }}
        className="checkout-left"
      />
      <animated.div
        style={{
          transform: x.to((x) => `translate3d(${x}%, 0, 0)`),
        }}
        className="checkout-right"
      />
    </div>
  );
};
