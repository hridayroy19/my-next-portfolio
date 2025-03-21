declare module "react-mouse-particles" {
  import * as React from "react";

  interface MouseParticlesProps {
    g?: number;
    color?: string;
    cull?: string;

  }

  const MouseParticles: React.FC<MouseParticlesProps>;
  export default MouseParticles;
}