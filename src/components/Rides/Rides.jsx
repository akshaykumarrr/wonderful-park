import React from "react";
import { Link } from "react-router-dom";
import { MdPark } from "react-icons/md";
import { SiReactos } from "react-icons/si";
import { GiWaterPolo } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "High Thrill Rides",
    link: "/HighRides",
    icon: <SiReactos />,
    delay: 0.2,
    description: "Experience the adrenaline rush with our high thrill rides that are sure to get your heart racing!"
  },
  {
    id: 2,
    title: "Dry Rides",
    link: "/LandRides",
    icon: <MdPark />,
    delay: 0.3,
    description: "Enjoy our dry rides designed for all ages, perfect for a fun and safe experience."
  },
  {
    id: 3,
    title: "Water Rides",
    link: "/WaterRides",
    icon: <GiWaterPolo />,
    delay: 0.4,
    description: "Dive into fun with our exciting water games that are perfect for cooling off!"
  },
  {
    id: 4,
    title: "Kids Rides",
    link: "/KidsRides",
    icon: <TbMoodKid />,
    delay: 0.5,
    description: "Safe and slow rides designed especially for kids to enjoy and have a great time!"
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

const Rides = () => {
  return (
    <section className="bg-white h-screen"> 
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">
          Rides for All Ages!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 h-full">
          {ServicesData.slice(0, 4).map((service) => ( 
            <Link to={service.link} key={service.id}>
              <motion.div
                variants={SlideLeft(service.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl h-full"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3 flex-grow">
                  {service.title}
                </h1>
                <p className="text-center px-3">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rides;
