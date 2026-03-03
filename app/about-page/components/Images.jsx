"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../../public/san5.jpg";
import img2 from "../../../public/san1.jpg";
import img3 from "../../../public/san6.jpg";
import img4 from "../../../public/san7.jpg";
import img5 from "../../../public/san4.jpg";
import img6 from "../../../public/san3.jpg";

const images = [img1, img2, img3, img4, img5, img6];



export default function Images() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900">
          Our Facility
        </h2>
        <p className="mb-12 text-center mt-2 text-gray-500">
          Clean, secure, and designed to ensure safe and efficient treatment.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          navigation
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, 
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[250px] rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Facility ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
