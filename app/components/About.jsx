import React from "react";
import { motion } from "framer-motion";
import Logo1 from "../../public/Vector-6.png";
import Logo2 from "../../public/Vector-7.png";
import Logo3 from "../../public/Vector-8.png";
import Image from "next/image";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <section id="about" className="bg-blue-900 py-10 mx-10 rounded-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {/* Card 1 */}
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="">
              <Image src={Logo1} alt="Staff Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mt-4">OUR STAFF</h3>
            <p className="text-gray-300 mt-2 text-sm px-4">
              Dedicated, experienced, and compassionate, our staff is committed
              to providing top-notch care and personalized attention to every
              patient.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="">
              <Image src={Logo2} alt="Services Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mt-4">OUR SERVICES</h3>
            <p className="text-gray-300 mt-2 text-sm px-4">
              Comprehensive healthcare services tailored to meet your needs,
              from general practice to specialized treatments, ensuring quality
              care at every step.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="">
              <Image
                src={Logo3}
                alt="Appointments Icon"
                className="h-10 w-10"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">
              APPOINTMENTS & ACCESS
            </h3>
            <p className="text-gray-300 mt-2 text-sm px-4">
              Easily schedule appointments and access our healthcare services
              with convenient, streamlined options designed to fit your busy
              lifestyle.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
