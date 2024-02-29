"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Shadow } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

const MeshComponent = () => {
  const fileUrl = "/shiba/scene.gltf";
  const meshRef = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime; // Get the elapsed time
    const radius = 2; // Set the radius of the circle
    const speed = 1; // Set the speed of the movement

    meshRef.current.rotation.x = Math.cos(t * speed) * radius; // Rotate the mesh
    meshRef.current.rotation.y = Math.sin(t * speed) * radius; // Rotate the mesh

    // Calculate the new position of the mesh in a circle
    meshRef.current.position.x = Math.cos(t * speed) * radius;
    meshRef.current.position.y = Math.sin(t * speed) * radius;

    // meshRef.current.rotation.x += delta;
    // meshRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={meshRef}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

const Shiba = () => {
  return (
    <div className="flex bg-white h-screen w-full">
      <Canvas>
        <ambientLight />
        {/* <OrbitControls /> */}
        {/* <pointLight position={[10, 10, 10]} color={"black"} /> */}
        <MeshComponent />
      </Canvas>
    </div>
  );
};

export { Shiba };
