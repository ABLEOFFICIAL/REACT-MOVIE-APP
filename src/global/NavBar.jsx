import React from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

const NavBar = ({ handleClick }) => {
  return (
    <div className="flex justify-between md:justify-around items-center  pt-15 pb-6">
      <Logo />
      <FaBars
        onClick={() => handleClick()}
        size={50}
        strokeWidth={1}
        className="bg-neutral-900 rounded-md border-2 border-neutral-500 text-white p-3 md:hidden"
      />
      <nav className="bg-neutral-950 border-2 border-neutral-800 rounded-xl py-4 px-3 hidden md:block">
        <a
          href="#"
          className="bg-neutral-800 p-3 rounded-lg text-base text-white font-extralight"
        >
          Home
        </a>
        <a
          href="#"
          className="p-3 rounded-lg text-base text-white font-extralight"
        >
          Movies & shows
        </a>
        <a
          href="#"
          className="p-3 rounded-lg text-base text-white font-extralight"
        >
          Support
        </a>
        <a
          href="#"
          className="p-3 rounded-lg text-base text-white font-extralight"
        >
          Subscription
        </a>
      </nav>
      <div className=" gap-5 hidden md:flex">
        <IoSearch className="text-white size-6 cursor-pointer" />
        <IoIosNotificationsOutline className="text-white size-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
