import React from "react";
import Text from "../global/Text";
import MyButton from "../global/MyButton";
import Play from "../global/Play";
import Plus from "../global/Plus";
import Like from "../global/Like";
import Volume from "../global/Volume";
import Left from "../global/Left";
import Right from "../global/Right";

const Suggest = ({ suggestedMovies }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="overflow-hidden ">
      <div className="flex transition-transform duration-300 ease-in-out overflow-x-auto">
        {suggestedMovies.slice(0, 5).map((movie) => {
          return (
            <div
              key={movie.id}
              style={{
                backgroundImage: `url(${imagePath + movie.poster_path})`,
              }}
              className={` w-screen h-[70vh] bg-cover bg-no-repeat`}
            >
              <div className="bg-linear-to-b from-neutral-950/0 to-neutral-950/95 h-full w-full relative p-8">
                <div className="flex flex-col justify-end items-center h-full">
                  <Text
                    title={movie.title}
                    bgTextTitle={movie.overview}
                    textAlign="justify-center"
                  />
                  <MyButton classname="bg-red-600 px-8 py-4 w-[70%] text-xl">
                    <Play /> Play Now
                  </MyButton>
                  <div className="flex justify-between w-60 mt-5">
                    <MyButton>
                      <Plus />
                    </MyButton>
                    <MyButton>
                      <Like />
                    </MyButton>
                    <MyButton>
                      <Volume />
                    </MyButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 pt-5">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Suggest;
