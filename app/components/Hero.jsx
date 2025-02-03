import React from "react";
import Image from "next/image";
import medicallogo from "../../public/medicallogo1.png";

const Hero = () => {
  return (
    <section
      className="bg-[url('https://cdn.hashnode.com/res/hashnode/image/upload/v1738522001499/a47a8462-0b29-4e40-99e7-dbd82ad4d637.jpeg')] bg-cover bg-center bg-no-repeat py-16"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center bg-white/60 py-16 px-8 rounded-lg">
        {/* Text Content */}
        <div className="lg:w-1/2 px-8">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            <span className="block">SANMINARET</span>
            <span className="block relative">
              HOSPITAL
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
            </span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            We provide the best & affordable health care. Our goal is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            BOOK APPOINTMENT
          </a>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 px-8 flex justify-center">
          <Image
            src={medicallogo}
            alt="Nurse Image"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
