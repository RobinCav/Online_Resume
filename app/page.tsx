import Image from "next/image";
import Banner from "@/components/intro"
import About from "../components/about"
import Footer from "../components/footer";
import Intro from "@/components/intro";
import Cetchappinfo from "@/components/cetchappinfo";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact"

export default function Home() {
  return (
    <section className="flex flex-col items-center px-4 ">
     <Intro/>
     <About/>
     <Experience/>
     <Skills/>
     <Cetchappinfo/>
     <Contact/>
     <Footer/>
    </section>
  );
}
