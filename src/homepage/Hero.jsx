import React from "react";
import NavBar from "../global/NavBar";
import HeroBg from "../images/hero-720b4fae.png";
import Text from "../global/Text";
import MyBtn from "../global/myBtn";
import { FaPlay } from "react-icons/fa6";
import EmptyDiv from "../global/EmptyDiv";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HeroBg})` }}
      className="h-screen bg-cover bg-center"
    >
      <div className="bg-gradient-to-b from-[#0f0f0f]/0 to-[#0f0f0f]/100 h-[50vh] w-full absolute bottom-0 left-0 z-0"></div>
      <div className="relative z-10 ">
        <NavBar />
        <EmptyDiv />
        <Text
          title="The Best Streaming Experience"
          textTitle="Stremvibe is the best streaming experience for watching your favourite moviesand shows on demand, anytime."
          textAlign="text-center"
        />
        <MyBtn classname="m-auto">
          <FaPlay className="inline mr-2" />
          Start Watching Now
        </MyBtn>
      </div>
    </div>
  );
};

export default Hero;
