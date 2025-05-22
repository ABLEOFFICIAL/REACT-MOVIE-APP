import React from "react";
import NavBar from "../global/NavBar";
import HeroBg from "../images/hero-720b4fae.png";
import Text from "../global/Text";
import MyButton from "../global/MyButton";
import Play from "../global/Play";
import EmptyDiv from "../global/EmptyDiv";

const Hero = ({ handleClick }) => {
  return (
    <div
      style={{ backgroundImage: `url(${HeroBg})` }}
      className="h-screen bg-no-repeat bg-cover bg-center px-5"
    >
      <div className="bg-gradient-to-b from-[#0f0f0f]/0 to-[#0f0f0f]/100 h-[50vh] w-full absolute bottom-0 left-0 z-0"></div>
      <div className="relative z-10 ">
        <NavBar handleClick={handleClick} />
        <EmptyDiv />
        <Text
          title="The Best Streaming Experience"
          textTitle="Stremvibe is the best streaming experience for watching your favourite moviesand shows on demand, anytime."
          textAlign="text-center"
          bgTextTitle="StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch."
          classname="md:w-[77%] md:m-auto"
        />
        <MyButton classname="m-auto bg-red-600 my-3 px-5 py-3 w-52">
          <Play />
          Start Watching Now
        </MyButton>
      </div>
    </div>
  );
};

export default Hero;
