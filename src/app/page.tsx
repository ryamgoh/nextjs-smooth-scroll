"use client";
import BoxPlayground from "@/components/BoxPlayground";
import ImageList from "@/components/ImageList";
import Playground from "@/components/Playground";
import { Shiba } from "@/components/Shiba";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <ImageList />
      <div className="h-screen"></div>
      <Playground />
      <div className="h-screen"></div>
      <Shiba />
      <div className="h-screen"></div>
      <BoxPlayground />
      <div className="h-screen"></div>
    </main>
  );
}
