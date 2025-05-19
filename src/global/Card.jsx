import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`border-2 border-neutral-600 rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
