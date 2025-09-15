"use client";
import type { Variants, TargetAndTransition } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  } as Variants;
};

export const scaleOnHover = {
  whileHover: {
    scale: 1.035,
    y: -4,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
  whileTap: { scale: 0.97 },
};

export const subtleHoverCard: { whileHover: TargetAndTransition } = {
  whileHover: {
    y: -6,
    rotate: 0.25,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
};
