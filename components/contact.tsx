"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/lib/send-email";



export default function Contact() {
  const { ref } = useSectionInView("Contact");




  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 rounded-xl bg-zinc-200 p-16 px-20  sm:mb-28 w-[min(100%,60rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: false,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-2 text-outline-p text-xs dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline font-semibold" href="mailto:example@gmail.com">
          robin.cavlek.jobb@hotmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10  flex flex-col" action={async (formData) => { await sendEmail(formData)}}>
        <input required maxLength={500} placeholder="Your email" className="bg-zinc-100 h-14 px-4 rounded-lg border border-gray-700" type="email" />
        <textarea required maxLength={500} placeholder="Your message" className="bg-zinc-100 h-52 my-3 rounded-lg border border-gray-700 p-4" />
        <button  type="submit" className="focus:scale-110 hover:scale-110 active:scale-105 hover:bg-[#334A52] group flex items-center justify-center gap-3 h-[3rem] w-[8rem] bg-slate-500 text-white rounded-full outline-none transition-all">
          Submit <FaPaperPlane classname="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />{" "}
        </button>
      </form>

     
    </motion.section>
  );
}