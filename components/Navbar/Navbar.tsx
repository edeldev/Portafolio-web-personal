"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAVIGATION_PAGES } from "@/utils/data";
import { MotionTransition } from "../Transition/TransitionComponent";

export const Navbar = () => {
  const router = usePathname();

  return (
    <div className="flex justify-center">
      <MotionTransition
        position="top"
        className="p-5 bg-[#5b595924] dark:bg-[#00000082] w-[13rem] rounded-full backdrop-blur-md bg-opacity-30 fixed bottom-10 z-10"
      >
        <div className="flex justify-center items-center gap-5">
          {NAVIGATION_PAGES?.map((page) => (
            <Link
              key={page?.id}
              href={page?.route}
              className={`relative flex items-center justify-center cursor-pointer hover:text-primary dark:hover:text-black ${
                router === page.route &&
                "text-primary dark:text-black before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-primary before:dark:bg-black before:absolute before:-bottom-2"
              }`}
            >
              <motion.div
                whileTap={{ scale: 1.3, y: -30 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              >
                {page?.icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </MotionTransition>
    </div>
  );
};
