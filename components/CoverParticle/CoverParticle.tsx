"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "@/contexts/ThemeContext";
import type { IOptions, Engine, RecursivePartial } from "@tsparticles/engine";

interface CoverParticleProps {
  id?: string;
}

export const CoverParticle = ({ id }: CoverParticleProps) => {
  const [init, setInit] = useState<boolean>(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: theme === "dark" ? "#000" : "#FFF" },
        links: {
          color: theme === "dark" ? "#000" : "#FFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [theme]
  );

  return (
    init && (
      <div className="w-[0px]">
        <Particles id={id} options={options} />
      </div>
    )
  );
};
