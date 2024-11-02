import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
 
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
    {
    id: 5,
    title: "Contact Us",
    link: "/",
  },
  {
    id: 7,
    title: <SlCalender/>,
    link: "#",
  },
  {
    id: 9,
    title: <IoCartOutline/>,
    link: "/cart",
  },

];
const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        <div>
          <h1 className="font-bold text-2xl">HAYYIN Park</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn" onClick={() => {
              window.location.href = "/login"
            }}>Sign In</button>
          </ul>
        </div>
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
