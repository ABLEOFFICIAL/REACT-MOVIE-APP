import React from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-8 pt-15 pb-6">
      <Logo />
      <FaBars
        size={50}
        strokeWidth={1}
        className="bg-neutral-900 rounded-md border-2 border-neutral-500 text-white p-3"
      />
    </div>
  );
};

export default NavBar;