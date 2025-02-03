// Create a new file called Features.js
import React from "react";
import Image from "next/image";
import healthIcon1 from "../../public/healthIcon1.png";
import healthIcon2 from "../../public/healthIcon2.png";
import healthIcon3 from "../../public/healthIcon3.png";
import { FaArrowCircleDown } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "24/7 Emergency Care",
      description:
        "Round-the-clock care when you need it most, ensuring rapid response and expert treatment for urgent medical situations.",
      icon: <Image src={healthIcon1} alt="Health Icon 1" width={40} height={40} />,
    },
    {
      title: "Specialist Consultations",
      description:
        "Access top-rated specialists across various fields, providing personalized diagnosis and treatment tailored to your needs.",
      icon: <Image src={healthIcon2} alt="Health Icon 1" width={40} height={40} />,
    },
    {
      title: "Diagnostics and Lab Tests",
      description:
        "Comprehensive testing and accurate results with state-of-the-art diagnostic technology to support your health journey.",
      icon: <Image src={healthIcon3} alt="Health Icon 1" width={40} height={40} />,
    },
  ];

  return (
    <section id="features" className="bg-[#0E465E] py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">OUR SERVICES</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#155A72] rounded-2xl p-8 text-center text-white">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-white rounded-full p-4">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-sm mb-6 font-nunito">{feature.description}</p>
            <a href="#" className="text-white underline flex items-center justify-center">
              READ MORE <span className="ml-1"><FaArrowCircleDown /></span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
