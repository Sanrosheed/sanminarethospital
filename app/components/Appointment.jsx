import React from "react";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Form from "./Form";

const mapContainerStyle = {
  width: "100%",
  height: "200px",
};

const sanCenter = {
  lat: 6.7117894148096875,
  lng: 3.3070715362266148,
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
      <div className="flex flex-col-reverse md:flex-row gap-2 items-start min-h-screen bg-gray-100 p-6">
        {/* Left Section */}
        <div className="md:w-3/4 bg-white rounded-lg shadow-md p-6 md:mr-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">
            Our Location
          </h1>
          <p className="text-gray-600 mb-4">
            Visit us at our hospital location. Below is the map to help you find
            us easily.
          </p>
          <div>
            <LoadScript googleMapsApiKey="AIzaSyBlDAFG4ISYzVr8w4Ahnie04YuKbIayxE8&callback=initMap">
              {" "}
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={sanCenter}
                zoom={15}
              >
                {/* Marker to show hospital location */}
                <Marker position={sanCenter} />
              </GoogleMap>
            </LoadScript>
          </div>

          {/* Map 2 */}
          <div className="mt-6">
            <LoadScript googleMapsApiKey="AIzaSyBlDAFG4ISYzVr8w4Ahnie04YuKbIayxE8&callback=initMap">
              {" "}
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
        </div>

        {/* Right Section (Form) */}
        <Form />
      </div>
    </motion.div>
  );
};

export default Appointment;
