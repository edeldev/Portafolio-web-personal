"use client";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { IconSunLow, IconMoon } from "@tabler/icons-react";
import LOGO_DARK from "../../public/logo-edeldev-dark.png";
import LOGO_LIGHT from "../../public/logo-edeldev-light.png";
import { MotionTransition } from "../Transition";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const logoSrc = theme === "light" ? LOGO_DARK : LOGO_LIGHT;
  const Icon = theme === "light" ? IconMoon : IconSunLow;

  return (
    <MotionTransition
      position="right"
      className="p-[2.5rem] w-full relative z-10"
    >
      <header className="flex justify-between items-center">
        <div>
          <Image
            src={logoSrc}
            alt="logo personal"
            className="aspect-[1/1] w-[8rem] h-[3.5rem]"
          />
        </div>

        <Icon
          onClick={toggleTheme}
          className={`cursor-pointer text-secondary dark:text-black transition-transform transform  hover:scale-150 duration-500 ease-in-out`}
          size={24}
          stroke={1}
        />
      </header>
    </MotionTransition>
  );
};
