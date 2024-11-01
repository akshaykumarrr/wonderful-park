import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPark } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { SiReactos } from "react-icons/si";
import { GiWaterPolo } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "High Thrill Rides",
    link: "/highRides",
    icon: <SiReactos />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Landing Rides",
    link: "/landRides",
    icon: <MdPark />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Water Rides",
    link: "/waterRides",
    icon: <GiWaterPolo />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Kids Rides",
    link: "/kidsRides",
    icon: <TbMoodKid />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Chat With Us",
    link: "/chat",
    icon: <IoMdHappy />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Contact Us",
    link: "/contact",
    icon: <BiSupport />,
    delay: 0.7,
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
                className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl h-full" // Set height to full
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3 flex-grow">
                  {service.title}
                </h1>
                <p>Mitchell Santner is a familiar name to Indian fans, being a regular in the New Zealand limited overs sides that have toured the country over the years and in the Indian Premier League (IPL) as part of the Chennai Super Kings (CSK). This month, though, he has arguably etched his name permanently in the memories of fans in the country as the player who ripped India's batting lineup to shreds and led New Zealand to a historic Test series win in the country</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rides;
