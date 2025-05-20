import React from "react";

const MyButton = ({ children, classname }) => {
  return (
    <button
      className={` text-white  text-sm font-light rounded-lg flex justify-center items-center  ${classname}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
