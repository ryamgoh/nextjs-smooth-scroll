import React, { useEffect } from "react";
import { Box } from "./Box";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BoxPlayground = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const bigBoxes = gsap.utils.toArray<Element>(".animate-box");
    bigBoxes.forEach((box) => {
      gsap.to(box, {
        backgroundColor: "black",
        scrollTrigger: {
          start: "50% 50%",
          // markers: true,
          trigger: box,
          scrub: true,
        },
      });
    });
  });
  return (
    <div className="flex w-full flex-col overflow-hidden lg:flex-row">
      <Box />
      <Box />
      <Box />
    </div>
  );
};

export default BoxPlayground;
