"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Playground = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const boxes = gsap.utils.toArray<Element>(".box");
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 300,
        color: "red",
        backgroundColor: "black",
        scrollTrigger: {
          trigger: box,
          scrub: true,
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
};

const Box = () => {
  return (
    <div className="box flex w-20 h-20 bg-white text-black items-center justify-center">
      HELLO
    </div>
  );
};

export default Playground;
