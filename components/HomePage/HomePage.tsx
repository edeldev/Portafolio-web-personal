"use client";
import { useState } from "react";
import Image from "next/image";
import IMAGE_PERSONAL_DARK from "../../public/EDELDEV-DARK.png";
import IMAGE_PERSONAL_LIGHT from "../../public/EDELDEV-LIGHT.png";
import { SocialMedia } from "./components";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "@/contexts/ThemeContext";
import { MotionTransition } from "../Transition";

export const HomePage = () => {
  const [isShowText, setIsShowText] = useState<boolean>(false);
  const [showWelcomeText, setShowWelcomeText] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleShowText = () => {
    setIsShowText(true);
    setShowWelcomeText(true);

    setTimeout(() => {
      setShowWelcomeText(false);
    }, 3000);
  };

  return (
    <section className={`py-10 ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="flex flex-col justify-center items-center">
        <MotionTransition position="top">
          <div className="circle">
            <div
              className={`${!isShowText ? "dot" : "det"}`}
              id={`${!isShowText ? "dot" : "det"}`}
            ></div>

            <div className="outer">
              <div className="tooltip-container flex justify-center imagen-personal inner pt-3">
                {!isShowText ? (
                  <Image
                    src={
                      theme === "dark"
                        ? IMAGE_PERSONAL_LIGHT
                        : IMAGE_PERSONAL_DARK
                    }
                    alt="foto personal"
                    onClick={handleShowText}
                  />
                ) : (
                  <>
                    {showWelcomeText && (
                      <span className="typed text-secondary dark:text-black text-xl">
                        ¡Bienvenido!
                      </span>
                    )}
                    {!showWelcomeText && (
                      <span className="text-secondary dark:text-black text-xl">
                        <Typewriter
                          words={["Desarrollador web", "Diseñador web"]}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />
                      </span>
                    )}
                  </>
                )}
                <span className="tooltip">Hola, da click</span>
              </div>
            </div>
          </div>
        </MotionTransition>
        <div className="py-10 z-9">
          <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-black">
            Edel Ballesteros
          </h1>
          <h5 className="text-right text-xl text-primary dark:text-black">
            Desarrollador Front-end
          </h5>
        </div>

        <SocialMedia />
      </div>
    </section>
  );
};
