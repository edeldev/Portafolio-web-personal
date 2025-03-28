"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { IconSunLow, IconMoon } from "@tabler/icons-react";
import LOGO_DARK from "../../public/logo-edeldev-dark.png";
import LOGO_LIGHT from "../../public/logo-edeldev-light.png";
import { MotionTransition } from "../Transition";
import { VALIDATE_ROUTES } from "@/utils/validateRoutes";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const Icon = theme === "light" ? IconMoon : IconSunLow;
  const is404Page = !VALIDATE_ROUTES.includes(pathname);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted
    ? theme === "light" || is404Page
      ? LOGO_DARK
      : LOGO_LIGHT
    : LOGO_DARK;

  return (
    <MotionTransition
      position="right"
      className="p-[2.5rem] w-full relative z-10"
    >
      <header className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={logoSrc}
            alt="logo personal"
            className="aspect-[1/1] w-[8rem] h-[3.5rem]"
          />
        </Link>

        {!is404Page && (
          <Icon
            onClick={toggleTheme}
            className="cursor-pointer text-secondary dark:text-black transition-transform transform hover:scale-150 duration-500 ease-in-out"
            size={24}
            stroke={1}
          />
        )}
      </header>
    </MotionTransition>
  );
};
