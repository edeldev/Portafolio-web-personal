"use client";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROYECTS } from "@/utils/data";
import { IconBrandGithub } from "@tabler/icons-react";

export const ProyectsPage = () => {
  return (
    <Fragment>
      <h2 className="text-2xl md:text-5xl text-primary dark:text-black font-bold z-10 text-center">
        ¿Quieres un proyecto?
      </h2>
      <p className="text-secondary text-sm md:text-base text-center z-10 dark:text-black">
        Cada proyecto es único. Aquí están algunos de mis trabajos.
      </p>
      {PROYECTS.map((proyect, index) => (
        <motion.div
          key={proyect.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          data-proyect={proyect.proyect}
          className={`w-auto md:w-[46rem] relative py-12 px-5 md:px-3 md:py-20 flex flex-col md:flex-row justify-center items-center gap-4 backdrop-blur-[54px] rounded-[3rem] md:rounded-[7.3rem] bg-gradient-to-b from-[rgba(35,37,49,0.5)] to-[rgba(15,15,24,0.5)] border border-[#20222e] dark:from-[rgba(217,217,217,0.5)] dark:to-[rgba(109,108,108,0.5)] dark:border-[#a3a3a3] before:absolute before:content-[attr(data-proyect)] before:top-0 before:right-0 before:text-primary before:dark:text-black before:text-[3rem] before:md:text-[4.5rem]`}
        >
          <div>
            <p
              className="text-xs text-center md:-rotate-90 truncate w-[100px] dark:text-black"
              title={proyect.lenguages}
            >
              {proyect.lenguages}
            </p>
          </div>

          <div>
            <Image
              src={proyect.image}
              alt={proyect.alt}
              width={450}
              height={450}
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h4
              title={proyect.title}
              className="text-xl text-center md:text-start font-bold animate-proyectDark dark:animate-proyectLight truncate w-[10rem]"
            >
              {proyect.title}
            </h4>

            <Link
              href={proyect.link}
              target="_blank"
              className="text-xs uppercase font-light relative transition-colors duration-300 hover:text-gray-300 before:absolute before:content-[''] before:w-10 before:h-[1px] before:rounded-full before:bg-white dark:before:bg-black before:-bottom-1 before:transition-all before:duration-300 hover:before:w-full dark:text-black"
            >
              Visitar sitio web
            </Link>
            <Link href={proyect.code} target="_blank">
              <IconBrandGithub
                className="mt-5 transition duration-300 hover:filter hover:drop-shadow-[0_0_10px_white] dark:hover:drop-shadow-[0_0_10px_black] dark:text-black"
                stroke={1}
              />
            </Link>
          </div>
        </motion.div>
      ))}
    </Fragment>
  );
};
