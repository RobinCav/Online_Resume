import React from 'react'



type SectionHeadingProps = {
    children: React.ReactNode;
  };
  

export default function sectionHeading({children} : SectionHeadingProps) {
  return (
    <div> <h2 className="text-2xl font-bold mb-5 text-outline">{children}</h2></div>
  )
}

