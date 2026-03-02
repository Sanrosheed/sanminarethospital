"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import logo2 from "../../public/Sanminaret_logo4.png";
import bg1 from "../../public/MinHero1.jpg";
import bg2 from "../../public/MinHero2.jpg";
import bg3 from "../../public/MinHero4.jpg";
import bg4 from "../../public/MinHero6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Hero = () => {
  const images = [bg1, bg2, bg3, bg4];

  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        effect="fade"
        loop={true}
        className="absolute inset-0 w-full h-full z-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt="Doctor background"
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6 pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to San Minaret Hospital
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          We provide the best & affordable health care. Our goal is to deliver
          the highest quality healthcare services.
        </p>

        <Link href="#appointment">
          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 pointer-events-auto">
            Book Appointment
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
