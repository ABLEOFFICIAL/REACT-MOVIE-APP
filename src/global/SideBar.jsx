import React from "react";
import { TbX } from "react-icons/tb";

const SideBar = ({ showSide, removeSide }) => {
  return (
    <>
      {showSide && (
        <div className="absolute h-screen w-screen top-0 left-0 bg-neutral-950 z-50 px-5 py-10 flex flex-col gap-7">
          <div>
            <TbX
              onClick={() => removeSide()}
              className="text-lg text-white bg-neutral-800 border-2 border-neutral-600 rounded-lg p-2 size-10"
            />
          </div>
          <nav className="flex flex-col max-h-80">
            <a
              href="#"
              className="bg-neutral-800 p-3 rounded-lg text-base text-white font-extralight border-b-2 border-b-neutral-800"
            >
              Home
            </a>
            <a
              href="#"
              className="p-3 rounded-lg text-base text-white font-extralight border-b-2 border-b-neutral-800"
            >
              Movies & shows
            </a>
            <a
              href="#"
              className="p-3 rounded-lg text-base text-white font-extralight border-b-2 border-b-neutral-800"
            >
              Support
            </a>
            <a
              href="#"
              className="p-3 rounded-lg text-base text-white font-extralight border-b-2 border-b-neutral-800"
            >
              Subscription
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default SideBar;
