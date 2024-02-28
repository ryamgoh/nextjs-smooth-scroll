import React from "react";
import Image from "next/image";
import { Parallax } from "./Parallax";

const ImageList = () => {
  return (
    <>
      <Parallax speed={1} className="self-start">
        <Image
          src={"https://picsum.photos/600/400?random=1"}
          alt="Image"
          width={600}
          height={400}
          priority
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={-2} className="self-end overflow-hidden">
        <Image
          src={"https://picsum.photos/600/400?random=2"}
          alt="Image"
          width={600}
          height={400}
          priority
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={-1} className="self-center">
        <Image
          src={"https://picsum.photos/400/600?random=3"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={-1} className="self-start">
        <Image
          src={"https://picsum.photos/600/400?random=4"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={-2} className="self-end">
        <Image
          src={"https://picsum.photos/600/400?random=5"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={2} className="self-start">
        <Image
          src={"https://picsum.photos/600/400?random=6"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={-1} className="self-center">
        <Image
          src={"https://picsum.photos/400/600?random=7"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={1} className="self-end">
        <Image
          src={"https://picsum.photos/600/400?random=8"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={-12} className="self-start">
        <Image
          src={"https://picsum.photos/600/400?random=9"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
          id="last-image"
        />
      </Parallax>
      <Parallax speed={-1} className="self-center">
        <Image
          src={"https://picsum.photos/400/600?random=10"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
        />
      </Parallax>
      <Image
        src={"https://picsum.photos/400/600?random=3"}
        alt="Image"
        width={400}
        height={600}
        sizes="50vw"
      />
      <Image
        src={"https://picsum.photos/600/400?random=4"}
        alt="Image"
        width={600}
        height={400}
        sizes="50vw"
      />
      <Image
        src={"https://picsum.photos/600/400?random=5"}
        alt="Image"
        width={600}
        height={400}
        sizes="50vw"
      />
    </>
  );
};

export default ImageList;
