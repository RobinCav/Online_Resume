import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import {FcSupport} from "react-icons/fc"
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
  {
    name: "CetchApp",
    hash: "#cetchapp",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated moral and ethics",
    location: "Cape Town, South Africa",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
 
 
  {
    title: "IT-Consultant",
    location: "Sunnaas Hospital, Norway",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - 2022",
  },
  {
    title: "IT-Support",
    location: "Sarpsborg, Norway",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FcSupport),
    date: "2022 - 2022",
  },
   
  {
    title: "Graduated IT",
    location: "Halden, Norway",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Homeroom Teacher",
    location: "Strømmen, Norway",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Substitute Teacher",
    location: "Strømmen, Norway",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - Currently",
  },
  {
    title: "Founder and CTO of CetchApp",
    location: "Strømmen, Norway",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - Currently",
  },

] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "PostgreSQL",
  "Python",
  "User testing",
  "Unit testing",
  "JSON",
  "Cryptography",
  "SQL",
  "Powershell",
  "DevOps",
  "ERP",
  "Postman",
  "RESTful API",
  "PHP",
  "Problem solving",
  "Prototyping",
  "Algorithms and data structures",
  "Project management",
  "Network security",
  "Risk management"

  
] as const;