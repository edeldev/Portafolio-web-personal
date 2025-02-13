import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <div className="z-10">
      <h3 className="text-2xl text-primary dark:text-black font-bold text-center pb-5">
        Contáctame
      </h3>

      <div className="flex justify-start items-start gap-3 flex-col md:flex-row md:justify-center md:items-center md:gap-8">
        <div className="flex items-center gap-2">
          <Link
            href="mailto:edeldev25@gmail.com"
            target="_blank"
            className="transition-transform transform  hover:scale-150 duration-500 ease-in-out dark:text-black"
          >
            <IconMail stroke={1} />
          </Link>
          <p className="text-base dark:text-black">Correo electrónico</p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/edel-dev"
            target="_blank"
            className="transition-transform transform  hover:scale-150 duration-500 ease-in-out dark:text-black"
          >
            <IconBrandLinkedin stroke={1} />
          </Link>
          <p className="text-base dark:text-black">LinkedIn</p>
        </div>
      </div>
    </div>
  );
};
