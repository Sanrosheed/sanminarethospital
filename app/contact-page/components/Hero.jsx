import React from "react";
import Image from "next/image";
import bg1 from "../../../public/MinHero5.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[100px] md:h-[200px] font-nunito">
      <Image
        src={bg1}
        alt="background nurse"
        className="object-cover h-[100px] md:h-[200px]"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6 pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold transition-all duration-700">
          Contact Us
        </h1>
      </div>
    </section>
  );
};

export default Hero;
