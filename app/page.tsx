import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="max-w-4xl mx-auto space-y-8 md:flex md:items-center justify-between md:space-y-0 w-screen">
        <section className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-center">Robin Cavlek</h1>
          <p className="text-l text-center">Fullstack Developer by day</p>
          <p className="text-l text-center">Founder and CTO of CetchApp at night</p>
        </section>
        <section>
          <Image
            src="/meg.jpg" 
            alt="Robin Cavlek"
            width={300} 
            height={300} 
            className="cursor-pointer rounded-3xl" 
          />
        </section>
      </div>
    </section>
  );
}
