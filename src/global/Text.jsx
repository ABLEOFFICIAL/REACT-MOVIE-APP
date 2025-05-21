import React, { useEffect, useState } from "react";

const Text = ({ title, textTitle, textAlign, classname, bgTextTitle }) => {
  const [text, setText] = useState();
  useEffect(() => {
    if (window.innerWidth < 768) {
      console.log(window.innerWidth);
      setText(textTitle);
    } else {
      setText(bgTextTitle);
    }
  }, []);
  return (
    <div className="z-50">
      <h1 className={`${textAlign} py-4 font-medium text-2xl md:text-4xl`}>
        {title}
      </h1>
      <p className={`${textAlign} ${classname} pb-4 font-light text-[16px]`}>
        {text}
      </p>
    </div>
  );
};

export default Text;
