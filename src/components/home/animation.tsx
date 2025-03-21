"use client";

import dynamic from "next/dynamic";

const MouseParticles = dynamic(() => import("react-mouse-particles"), {
  ssr: false,
});

export default function Animation() {
  return (
    <div>
      <MouseParticles g={5} color="random" cull="col,image-wrapper" />
    </div>
  );
}
