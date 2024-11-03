import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { CiSignpostDuo1 } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoMdHappy } from "react-icons/io";
import { MdLocalActivity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { SiReactos } from "react-icons/si";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoTicketSharp } from "react-icons/io5";
import { FaCar, FaCamera, FaWheelchair } from "react-icons/fa"; 
import { MdOutlinePayment } from "react-icons/md";

// Define the components that will be rendered for each service
const Rides = () => <div>Rides Component</div>;
const Dining = () => <div>Dining Component</div>;
const Vehicles = () => <div>Vehicles Component</div>;
const Photographers = () => <div>Photographers Component</div>;
const Wheelchairs = () => <div>Wheelchairs Component</div>;
const ContactUs = () => <div>Contact Us Component</div>;
const Transactions = () => <div>Transactions Component</div>;
const TicketBooking = () => <div>Ticket Booking Component</div>;

const ServicesData = [
    { id: 1, title: "Rides", component: <Rides />, icon: <SiReactos /> },
    { id: 2, title: "Dining", component: <Dining />, icon: <IoFastFoodOutline /> },
    { id: 3, title: "Vehicles", component: <Vehicles />, icon: <FaCar /> },
    { id: 4, title: "Photographers", component: <Photographers />, icon: <FaCamera /> },
    { id: 5, title: "Wheelchairs", component: <Wheelchairs />, icon: <FaWheelchair /> },
    { id: 6, title: "Contact Us", component: <ContactUs />, icon: <BiSupport /> },
    { id: 7, title: "Transactions", component: <Transactions />, icon: <MdOutlinePayment /> },
    { id: 8, title: "Ticket Booking", component: <TicketBooking />, icon: <IoTicketSharp /> },
];

function Landing() {
    const [selectedComponent, setSelectedComponent] = useState(<Rides />); // Default to Rides component

    return (
        <div className='h-screen'>
            <div className="flex flex-col">
                <div className="top flex text-4xl items-center justify-center bg-yellow-400 w-full h-[15vh]">ADMIN PORTAL</div>
                <div className='maincomponent w-full h-[85vh] flex '>
                    <div className="left w-[25%] h-full flex flex-col overflow-y-auto  overflow-x-hidden">
                        {ServicesData.map((service) => (
                            <motion.div
                                key={service.id}
                                className="bg-black text-yellow-300 border border-yellow-300 flex flex-col items-center justify-center p-2 cursor-pointer"
                                onClick={() => setSelectedComponent(service.component)}
                                whileHover={{ scale: 1.05 }} 
                            >
                                <div className="text-2xl mb-4">{service.icon}</div>
                                <h1 className="text-lg font-semibold text-center px-1 flex-grow">
                                    {service.title}
                                </h1>
                            </motion.div>
                        ))}
                    </div>
                    <div className="right w-[80%] p-4 bg-white overflow-y-auto">
                        {selectedComponent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
