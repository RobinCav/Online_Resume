
"use client"

import SectionHeading from "./section-heading";
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/hooks";

function cetchappinfo() {
    const { ref } = useSectionInView("CetchApp");
  return (
    <motion.section className="flex flex-col text-outline-p justify-normal  max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y:0}}
    transition={{delay: 0.2}}
    ref={ref}
    id="cetchapp">
        <SectionHeading>CetchApp</SectionHeading>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti repellendus rerum deserunt, neque officia accusamus, veniam distinctio perferendis magnam repellat ex aliquid at recusandae, voluptatibus officiis facilis aliquam ullam doloremque!
        Veritatis, quisquam, perspiciatis consectetur, placeat iste assumenda aut rerum rem omnis nisi consequatur optio laboriosam hic vero. Incidunt expedita eum dignissimos! Numquam magni laborum aperiam id esse. Sit, facere beatae.
        Consequatur dolorem inventore illum deleniti tenetur labore maxime facere ea aperiam voluptatem odit saepe iste quidem eveniet amet eius, eum culpa porro debitis ducimus totam optio sed minima adipisci. Error.
        </p>
        <br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo suscipit magni adipisci! Cupiditate ipsum tempore, rerum, necessitatibus beatae eius, sit voluptates soluta minus magni nam nemo ipsa. Placeat, nam nisi?
        Minima ipsa ad adipisci hic atque ea nobis nostrum iste quisquam reprehenderit debitis dicta esse facere, illo facilis amet a, assumenda sapiente harum, illum voluptate deserunt eveniet. Harum, libero eum!</p>
     
        <br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo suscipit magni adipisci! Cupiditate ipsum tempore, rerum, necessitatibus beatae eius, sit voluptates soluta minus magni nam nemo ipsa. Placeat, nam nisi?
        Minima ipsa ad adipisci hic atque ea nobis nostrum iste quisquam reprehenderit debitis dicta esse facere, illo facilis amet a, assumenda sapiente harum, illum voluptate deserunt eveniet. Harum, libero eum!</p>
     
        <br/>
    </motion.section>
  )
}

export default cetchappinfo