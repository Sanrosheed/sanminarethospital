import React from "react";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 6.660880220601414,
  lng: 3.2759064576713803,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Appointment = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: false, amount: 0.2 }}
      id="appointment"
      className="mt-14"
    >
      <h3 className="flex justify-center items-center text-2xl md:text-4xl font-bold">
        Book an Appointment
      </h3>
      <div className="flex flex-col-reverse md:flex-row gap-4 items-start min-h-screen bg-gray-100 p-6">
        {/* Left Section */}
        <div className="md:w-3/4 bg-white rounded-lg shadow-md p-6 md:mr-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">
            Our Location
          </h1>
          <p className="text-gray-600 mb-4">
            Visit us at our hospital location. Below is the map to help you find
            us easily.
          </p>
          <LoadScript googleMapsApiKey="AIzaSyBlDAFG4ISYzVr8w4Ahnie04YuKbIayxE8&callback=initMap">
            {" "}
            {/* Replace with your actual Google Maps API key */}
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              {/* Marker to show hospital location */}
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-md px-6 pt-6 pb-6 md:pb-32">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Send us a message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Appointment;
