"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/MotionTransition";
import { TMotionTransitionProps } from "./types";

export const MotionTransition = (props: TMotionTransitionProps) => {
  const { children, className, position } = props;

  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};
