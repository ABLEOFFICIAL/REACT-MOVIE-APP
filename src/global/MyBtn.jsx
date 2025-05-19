import React from "react";

const myBtn = ({ children, classname }) => {
  return (
    <button
      className={`bg-red-600 text-white px-5 py-3 text-sm font-light rounded-lg flex justify-center items-center w-60 ${classname}`}
    >
      {children}
    </button>
  );
};

export default myBtn;
