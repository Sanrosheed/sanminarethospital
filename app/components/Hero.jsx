import React from "react";
import Image from "next/image";
import medicallogo from "../../public/blackdocs.png";
import Link from "next/link";
import logo2 from "../../public/Sanminaret_logo4.png";

const Hero = () => {
  return (
    <section className="p-10 py-20 md:py-24 text-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <Image src={logo2} className="w-52 h-32 md:w-80 md:h-52 ml-10 md:ml-28" alt="Logo" />
          <p className="mt-4 md:mt-2 text-lg">
          We provide the best & affordable health care. Our goal is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.
          </p>
          <Link href="#appointment">
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Book Appointment
          </button>
          </Link>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src={medicallogo}
            alt="Doctor Image"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
