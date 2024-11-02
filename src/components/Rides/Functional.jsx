import React, { useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Users from "./Users";

const ServicesData = [
  { id: 1, title: "High Thrill Rides", collectionName: "highRides", icon: <RiComputerLine />, delay: 0.2 },
  { id: 2, title: "Landing Rides", collectionName: "landRides", icon: <CiMobile3 />, delay: 0.3 },
  { id: 3, title: "Water Rides", collectionName: "waterRides", icon: <RiComputerLine />, delay: 0.4 },
  { id: 4, title: "Kids Rides", collectionName: "kidsRides", icon: <IoPulseOutline />, delay: 0.5 },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: delay, ease: "easeInOut" },
  },
});

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <section className="bg-white h-screen">
      <div className="container h-full pb-14 pt-16 flex flex-col">
        {!selectedService ? ( // Render services list if no service is selected
          <>
            <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 h-full">
              {ServicesData.map((service) => (
                <div key={service.id} onClick={() => handleServiceClick(service)}>
                  <motion.div
                    variants={SlideLeft(service.delay)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl h-full"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h1 className="text-lg font-semibold text-center px-3 flex-grow">{service.title}</h1>
                    <p>Click for more details</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Render only the Users component if a service is selected
          <Users collectionName={selectedService.collectionName} heading={selectedService.title} />
        )}
      </div>
    </section>
  );
};

export default Services;
