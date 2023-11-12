"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      id="skills"
      initial={{opacity: 0, y:100}}
      animate={{opacity: 1, y:0}}
      transition={{delay: 0.2}}
      ref={ref}
      viewport={{
        once: false,
      }}
      className="mb-28 max-w-[53rem] scroll-mt-28 mt text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-normal h-1/2 gap-3 text-xl text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-[#334A52] borderBlack text-white text-base rounded-xl  px-6 py-3 dark:bg-white/10 dark:text-white/80 shadow-xl"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}