import { SOCIAL_MEDIA_CONTACT } from "@/utils/data";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import React, { Fragment } from "react";

export const ContactPage = () => {
  return (
    <Fragment>
      <h2 className="text-2xl md:text-5xl text-primary dark:text-black font-bold z-10 text-center">
        Definamos tu proyecto
      </h2>
      <p className="text-secondary text-sm md:text-base text-center z-10 dark:text-black">
        No dude en ponerse en contacto conmigo
        <span className="font-bold block">¡VAMOS A CREAR JUNTOS!</span>
      </p>

      <Link
        href="https://wa.me/8123697420/?text=Hola,%20quiero%20un%20proyecto%20web"
        target="_blank"
      >
        <button className="relative w-40 h-14 border-[3px] border-ridge border-[#0CF0FF] outline-none bg-transparent text-[#C4C4C4] transition duration-1000 rounded-md text-[16px] font-bold shadow-none hover:shadow-[inset_0px_0px_25px_#0CF0FF] before:content-[''] before:absolute before:top-[-10px] before:left-[3%] before:w-[95%] before:h-[40%] before:bg-[#10101a] before:transition before:duration-500 before:origin-center hover:before:scale-0 after:content-[''] after:absolute after:top-[80%] after:left-[3%] after:w-[95%] after:h-[40%] after:bg-[#10101a] after:transition after:duration-500 after:origin-center hover:after:scale-0 dark:text-black dark:border-[3px] darkborder-ridge dark:border-black dark:after:bg-[#cbcdcb] dark:before:bg-[#cbcdcb] dark:hover:shadow-[inset_0px_0px_25px_#000000]">
          ¡Comenzamos!
        </button>
      </Link>

      <div className="flex justify-between gap-2 md:gap-5 z-9 mt-10">
        {SOCIAL_MEDIA_CONTACT?.map((social) => (
          <a
            key={social?.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-150 duration-500 ease-in-out text-secondary dark:text-black"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <strong className="text-sm dark:text-black">o</strong>

      <Link
        href="https://wa.me/8123697420/?text=Hola,%20quiero%20un%20proyecto%20web"
        target="_blank"
        className="z-10 text-green-600 hover:text-green-400 dark:hover:text-green-700 transition-all duration-300 ease-in-out"
      >
        <IconBrandWhatsapp size={55} stroke={1} />
      </Link>

      <p className="text-sm text-center z-10 animate-proyectDark dark:animate-proyectLight">
        Te espera tu proyecto
      </p>
    </Fragment>
  );
};
