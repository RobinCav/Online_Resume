
"use client"

import SectionHeading from "./section-heading";
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/hooks";

function About() {

    const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.section className="text-outline-p  flex flex-col justify-normal pt-3 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y:0}}
    transition={{delay: 0.2}}
    id="about"
    viewport={{
      once: false,
    }}
    ref={ref}>
        <SectionHeading>About me</SectionHeading>
        <p>🚀 Passionate Developer | Aspiring Innovator | Tech Enthusiast 🚀
          <br/>

Greetings! I'm Robin Cavlek, a recent graduate with an insatiable curiosity for crafting captivating user experiences through web and app development. With hands-on experience in JavaScript, HTML, and CSS, I thrive on breathing life into digital landscapes. My journey has also led me to Java, Android Studio, React.js, React Native, and Node.js, where I've harnessed the power of these technologies to create seamless applications.
        </p>
        <br/>

        <p>I'm a dedicated individual with a varied experience that spans from software
development to launching and running my own mobile app. My education includes a
Bachelor's degree in Information Technology, with solid expertise in areas such as web
development, object-oriented programming, algorithms, data structures, operating
systems, and cybersecurity.
My passion for technology and continual learning propels me forward. Currently, I
am particularly focused on artikcial intelligence and am worzing diligently towards an
AHure certikcation to enhance my cloud computing szills. My aim is to contribute to
creating innovative and sustainable solutions.</p>
     
        <br/>
    </motion.section>
  )
}

export default About;