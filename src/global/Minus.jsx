import React from "react";
import { FaMinus } from "react-icons/fa6";

const Minus = ({ showHideAnswer }) => {
  return <FaMinus onClick={showHideAnswer} className="text-white size-5" />;
};

export default Minus;
