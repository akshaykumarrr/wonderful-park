import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaCamera, FaWheelchair, FaAccessibleIcon } from "react-icons/fa"; 
import { motion } from "framer-motion";

const FacilitiesData = [
  {
    id: 1,
    title: "Vehicle Booking",
    link: "/Vehicles",
    icon: <FaCar />,
    delay: 0.2,
    description: "Easily book vehicles for convenient transportation around the park.",
  },
  {
    id: 2,
    title: "Camera Booking",
    link: "/cameraBooking",
    icon: <FaCamera />,
    delay: 0.3,
    description: "Capture memorable moments with high-quality cameras available for rent.",
  },
  {
    id: 3,
    title: "Wheelchair Booking",
    link: "/WheelChair",
    icon: <FaWheelchair />,
    delay: 0.4,
    description: "Accessible wheelchair rentals are available for guests who need assistance.",
  },
  {
    id: 4,
    title: "Screen Reader",
    link: "/screenReader",
    icon: <FaAccessibleIcon />,
    delay: 0.5,
    description: "Text-to-speech converter for visually impaired guests for an accessible experience.",
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Facilities = () => {
  return (
    <section className="bg-white h-screen"> 
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">
          Facilities for Our Guests
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 h-full">
          {FacilitiesData.map((facility) => ( 
            <Link to={facility.link} key={facility.id}>
              <motion.div
                variants={SlideLeft(facility.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl h-full"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3 flex-grow">
                  {facility.title}
                </h1>
                <p className="text-center text-gray-600 mt-2">{facility.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
