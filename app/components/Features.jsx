"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Img1 from "../../public/general-medicine.jpg";
import Img2 from "../../public/surgery.jpg";
import Img3 from "../../public/laboratory.jpg";
import Img4 from "../../public/antenatal.jpg";
import Img5 from "../../public/pediatrics.jpg";
import Img6 from "../../public/emergency.jpg";

const Features = () => {
  const features = [
    {
      title: "General Practice",
      icon: Img1,
      body: "Comprehensive general practice services for all your healthcare needs. Our experienced physicians provide personalized care, preventative treatments, and expert management of acute and chronic conditions for patients of all ages.",
    },
    {
      title: "Surgery",
      icon: Img2,
      body: "Expert surgical care tailored to your needs. Our skilled surgeons provide safe, advanced procedures with precision and compassion, ensuring the best outcomes for your health and recovery.",
    },
    {
      title: "Laboratory",
      icon: Img3,
      body: "We provide high-quality diagnostic services and personalized patient treatment, ensuring every result contributes meaningfully to patient care. Our laboratory plays a vital role in prevention, early detection, disease monitoring, and treatment optimization.",
    },
    {
      title: "Antenatal",
      icon: Img4,
      body: "Comprehensive antenatal care for expectant mothers, ensuring a healthy pregnancy journey. Our experienced team provides personalized monitoring, education, and support for both mother and baby, from conception to delivery",
    },
    {
      title: "Pediatrics",
      icon: Img5,
      body: "Expert pediatric care focused on your child’s health and development. From newborns to teens, we provide compassionate, comprehensive medical services to ensure your child’s well-being at every stage.",
    },
    {
      title: "Emergency Medicine",
      icon: Img6,
      body: "Rapid, reliable emergency care when it matters most. Our team is equipped to handle urgent medical situations with expertise and compassion, ensuring timely treatment for critical conditions, 24/7.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="bg-gray-100 py-10 mt-14">
      <div className="container mx-auto text-center">
        <h3 className="ext-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Our Services
        </h3>
        <p className="mt-2 px-4 text-gray-500">
          We offer a range of services and areas of expertise which includes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-8">
          {features.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-xl bg-white`}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <Image
                    src={service.icon}
                    alt="Service Icon"
                    className="rounded-t-lg md:h-64"
                  />
                </div>
                <h4 className="text-xl font-semibold mt-7">{service.title}</h4>
              </div>
              <p className="px-6 pb-6 pt-3 text-gray-600">{service.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
