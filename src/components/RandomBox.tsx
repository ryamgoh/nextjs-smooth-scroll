import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const RandomBox = () => {
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    const boxes = gsap.utils.toArray<Element>(".random-box");
    boxes.forEach((box) => {
      gsap.to(box, {
        x: endX,
        duration: 1,
        ease: "power3.inOut",
      });
    });
  }, [endX]);

  return (
    <div className="flex flex-col space-y-4">
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() =>
          setEndX(Math.random() * window.innerWidth - window.innerWidth / 2)
        }
      >
        Click me to move the box!
      </button>
      <SmallBox />
    </div>
  );
};

export default RandomBox;

const SmallBox = () => {
  return (
    <div className="random-box flex w-40 h-40 bg-white text-black items-center justify-center">
      HELLO I'M BACK
    </div>
  );
};
