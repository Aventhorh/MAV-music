/* eslint-disable */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import { links } from "../assets/constants";
import { loader } from "../assets";

const NavLinks = ({ handleClick }) => (
  <div className="animate-slideright">
    {links.map((item) => (
      <NavLink
        to={item.to}
        className="flex flex-row justify-start items-center text-white my-8 font-medium text-xl"
        onClick={() => handleClick && handleClick()}
      >
        {item.name}
        <item.icon className="w-6 h-6 ml-2 text-white " />
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] px-4 bg-[#222629]">
        <div className="w-full flex flex-row items-center p-0 m-0 animate-slideright">
          <img src={loader} alt="loader" className="w-10 h-32 object-contain" />
          <h1 className="font-extralight text-3xl text-[#86C232]  object-contain">
            MAV.music
          </h1>
          <img src={loader} alt="loader" className="w-10 h-32 object-contain" />
        </div>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#222629] backdrop-blur-lg z-20 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "right-0" : "right-full"
        }`}
      >
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
