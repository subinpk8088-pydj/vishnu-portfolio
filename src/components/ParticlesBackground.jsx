import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: { value: "#09090B" },
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#f97316" },
          links: {
            color: "#27272A",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 2,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}