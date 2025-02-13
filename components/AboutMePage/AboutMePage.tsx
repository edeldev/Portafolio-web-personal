import { Fragment } from "react";
import { PROGRAMING_LANGUAGES } from "@/utils/data";
import Image from "next/image";
import { Contact, TimeLine } from "./components";
import { MotionTransition } from "../Transition";

export const AboutMePage = () => {
  return (
    <Fragment>
      <h2 className="text-2xl md:text-5xl text-primary dark:text-black font-bold z-10 text-center">
        ¿Comenzamos?
      </h2>
      <p className="text-secondary text-sm md:text-base text-center z-10 dark:text-black">
        ¿Buscas un desarrollador web para tu proyecto?
      </p>
      <MotionTransition position="right">
        <div className="flex justify-center items-center gap-5 z-10">
          {PROGRAMING_LANGUAGES.map((lengauge) => (
            <Image
              key={lengauge.id}
              src={lengauge.image}
              alt={lengauge.title}
              width={30}
              height={30}
            />
          ))}
        </div>
      </MotionTransition>

      <p className="text-lg z-10 mt-5 font-bold dark:text-black">
        Mi objetivo es:
      </p>

      <TimeLine />

      <Contact />
    </Fragment>
  );
};
