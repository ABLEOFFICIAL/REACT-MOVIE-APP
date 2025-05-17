import React from "react";

const Text = ({ title, textTitle, textAlign }) => {
  return (
    <div className="z-50">
      <h1 className={`${textAlign} py-4 font-medium text-2xl`}>{title}</h1>
      <p className={`${textAlign} pb-4 font-light text-[16px]`}>{textTitle}</p>
    </div>
  );
};

export default Text;
