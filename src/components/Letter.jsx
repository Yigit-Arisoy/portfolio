import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Letter({ letter, delay }) {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, []);
  });

  return (
    <span
      className={`${
        appear ? "appearingElement" : "hiddenElement"
      } hover:scale-125`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {letter}
    </span>
  );
}

export default Letter;
