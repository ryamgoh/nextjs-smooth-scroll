"use client";
import { Box } from "@/components/Box";
import ImageList from "@/components/ImageList";
import Playground from "@/components/Playground";
import { Shiba } from "@/components/Shiba";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <ImageList />
      <div className="h-screen"></div>
      <Playground />
      <div className="h-screen"></div>
      <Shiba />
      <div className="h-screen"></div>
      <Box />
      <Box />
      <Box />
    </main>
  );
}
