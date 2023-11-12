"use client";

import React, { useEffect, useState } from 'react';

const ParallaxDivs: React.FC = () => {
    const [offsetY, setOffsetY] = useState<number>(0);
    const [maxScroll, setMaxScroll] = useState<number>(0);
  
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      const windowHeight = window.innerHeight;
      const maxScrollHeight = document.documentElement.scrollHeight - windowHeight;
      setMaxScroll(maxScrollHeight);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const progress = offsetY / maxScroll;// Progress of scrolling: 0 at top, 1 at bottom

  return (
    <>
       <div 
        className="bg-[#4DBF85] absolute top-[-6rem] -z-10 right-[6rem] h-screen w-[31.25rem] rounded-full blur-[5rem] sm:w-[68.75rem] dark:bg-[#946263]"
        style={{ 
          transform: `translateY(${offsetY * 0.5}px) translateX(${progress * -60}%)`
        }}
      ></div>
      <div 
        className="bg-[#7be0ff] absolute top-[-6rem] -z-10 right-[6rem] h-screen w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        style={{ 
          transform: `translateY(${offsetY * 0.5}px) translateX(${progress * -60}%)`
        }}
      ></div>
    

    </>
  );
};

export default ParallaxDivs;
