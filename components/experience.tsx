"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {motion} from "framer-motion"
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";


function experience() {

  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();

  return (
    <motion.section className="flex flex-col   justify-normal max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 relative"

    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y:0}}
    transition={{delay: 0.2}}
   
    id="experience"
    ref={ref}>
         <SectionHeading>My experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            dateClassName="custom-date-style"
              contentStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                borderRadius: 5,
                padding: "2rem 2rem",
                
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              
              icon={item.icon}
              iconStyle={{
                
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>

    </motion.section>
  )
}

export default experience