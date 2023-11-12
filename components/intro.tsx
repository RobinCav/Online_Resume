"use client"
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";



function Intro(){

  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <section ref={ref} className="flex justify-around h-1/2   w-screen items-center flex-col mt-40 mb-28 sm:mb-40" id="home scroll-mt-28" >
           <div className="relative">
            <motion.div
            initial={{opacity:0, scale: 0}}
            animate={{opacity:1, scale: 1}}
            transition={{type: "tween", duration: 0.2}}
            >
            <Image src="/meg.jpg"
            alt="Pobin Cavlek portrait"
            width="292"
            height="292"
            className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>

            <motion.span className="absolute bottom-0 text-3xl right-0"
            initial={{opacity:0, scale: 0}}
            animate={{opacity:1, scale: 1}}
            transition={{type: "spring", duration: 0.7, delay: 0.1}}
            >
            👋🏼
            </motion.span>
            </motion.div>

            </div>
            <motion.p className="mb-10 mt-4 px-4l font-medium !leading-[1.5]  text-center "
            initial={{opacity:0, scale: 0}}
            animate={{opacity:1, scale: 1}}
            transition={{type: "tween", duration: 0.2}}>
              <span className="text-outline font-bold md:text-4xl sm:text-xl">Enchanté, Im Robin Cavlek.</span>
              <br />
              <span className="text-outline-p md:text-2xl sm:lg">Aspiring <span className="font-bold">full-stack developer</span> by day. ☀️</span>
              <br />
              <span className="text-outline-p md:text-2xl sm:lg"><span className="font-bold">Founder</span> and <span className="font-bold" >CTO</span> of  <span className="font-bold">CetchApp</span> at night.🌙</span>
            </motion.p>

             <motion.div
        className="flex flex-col sm:flex-row items-center justify-between md:gap-10 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-600 text-white px-6 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition text-sm hover:bg-[#334A52]"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-6 py-2 text-sm flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-[#0077b5] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-1  transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/robin-cavlek-18298a231/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-[#6e5494] active:scale-120 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/RobinCav"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
      </section>
    );
}

export default Intro;