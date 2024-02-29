"use client";

import React, { use, useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

const MeshComponent = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const { scale, color } = useSpring({
    scale: active ? 1.5 : 1,
    color: hovered ? "hotpink" : "orange",
  });
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });
  return (
    <animated.mesh
      {...props}
      ref={meshRef}
      scale={scale}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <animated.boxGeometry args={[1, 1, 1]} />
      <animated.meshStandardMaterial color={color} />
      {/* <OrbitControls /> */}
    </animated.mesh>
  );
};

const Box = () => {
  return (
    <div className="animate-box flex bg-white w-full h-screen">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <MeshComponent position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export { Box };
