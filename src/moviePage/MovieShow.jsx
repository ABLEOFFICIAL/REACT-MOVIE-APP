import React from "react";
import MyButton from "../global/MyButton";

const MovieShow = () => {
  return (
    <div className="my-15">
      <div className="flex gap-3 p-1.5 w-64 m-auto border-2 border-neutral-700 rounded-lg justify-between">
        <MyButton classname="bg-neutral-800 px-10 py-4 rounded-lg">
          Movies
        </MyButton>
        <MyButton classname="px-10 py-4">Shows</MyButton>
      </div>
      
    </div>
  );
};

export default MovieShow;
