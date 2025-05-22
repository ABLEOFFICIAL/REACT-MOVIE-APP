import React from "react";
import { FaPlus } from "react-icons/fa6";

const Plus = ({ showHideAnswer }) => {
  return (
    <FaPlus
      onClick={showHideAnswer}
      className="text-white size-14 bg-neutral-900 p-3 rounded-xl border-[1px] border-neutral-700"
    />
  );
};

export default Plus;
