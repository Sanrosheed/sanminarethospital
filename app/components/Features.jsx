import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Icon1 from "../../public/vector10.png";
import Icon2 from "../../public/group84.png";
import Icon3 from "../../public/vector11.png";
import Icon4 from "../../public/vector12.png";
import Icon5 from "../../public/vector13.png";
import Icon6 from "../../public/vector14.png";
import Icon7 from "../../public/vector15.png";

const Features = () => {
  const features = [
    {
      title: "General Practice",
      color: "bg-[#D9DFEF]",
      icon: Icon1,
      iconColor: "bg-[#2555D2]",
      body: "Comprehensive general practice services for all your healthcare needs. Our experienced physicians provide personalized care, preventative treatments, and expert management of acute and chronic conditions for patients of all ages.",
    },
    {
      title: "Industrial Medicine",
      color: "bg-[#EDC5C5]",
      icon: Icon2,
      iconColor: "bg-[#D22525]",
      body: "Specialized industrial medicine services focused on workplace health and safety. We offer occupational health assessments, injury management, and preventative care to ensure the well-being and productivity of your workforce.",
    },
    {
      title: "Surgery",
      color: "bg-[#EADBB6]",
      icon: Icon3,
      iconColor: "bg-[#F0B41C]",
      body: "Expert surgical care tailored to your needs. Our skilled surgeons provide safe, advanced procedures with precision and compassion, ensuring the best outcomes for your health and recovery.",
    },
    {
      title: "Internal Medicine",
      color: "bg-[#E5DBA6]",
      icon: Icon4,
      iconColor: "bg-[#A38900]",
      body: "Comprehensive internal medicine care for adults. Our expert physicians diagnose, treat, and manage complex conditions, providing personalized care focused on prevention, wellness, and long-term health management for optimal well-being.",
    },
    {
      title: "Antenatal",
      color: "bg-[#CDBCBC]",
      icon: Icon5,
      iconColor: "bg-[#595656]",
      body: "Comprehensive antenatal care for expectant mothers, ensuring a healthy pregnancy journey. Our experienced team provides personalized monitoring, education, and support for both mother and baby, from conception to delivery",
    },
    {
      title: "Infertility",
      color: "bg-[#FBBED7]",
      icon: Icon6,
      iconColor: "bg-[#CE2A6E]",
      body: "Specialized infertility services offering personalized care, advanced diagnostics, and cutting-edge treatments to help individuals and couples overcome challenges and achieve their dream of starting or expanding their family.",
    },
    {
      title: "Pediatrics",
      color: "bg-[#A9EED3]",
      icon: Icon7,
      iconColor: "bg-[#C5B3EA]",
      body: "Expert pediatric care focused on your child’s health and development. From newborns to teens, we provide compassionate, comprehensive medical services to ensure your child’s well-being at every stage.",
    },
    {
      title: "Emergency Medicine",
      color: "bg-[#C5B3EA]",
      icon: Icon1,
      iconColor: "bg-[#5E24D3]",
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
        <h3 className="text-2xl md:text-4xl font-bold">
          Services & Specialists
        </h3>
        <p className="mt-2 px-4 text-gray-500">
          We offer a range of services and areas of expertise which includes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mx-8">
          {features.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.color} p-6 rounded-lg`}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`flex justify-center items-center ${service.iconColor} rounded-full p-4 mb-4`}
                >
                  <Image
                    src={service.icon}
                    alt="Service Icon"
                    className="h-8 w-8"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-6 mt-2">
                  {service.title}
                </h4>
              </div>
              <p className="mt-2 text-gray-600">{service.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
