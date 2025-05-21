import React from "react";
import Text from "../global/Text";
import Card from "../global/Card";
import { RiSmartphoneFill } from "react-icons/ri";
import { FaTablet } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { BsFillLaptopFill } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { BsHeadsetVr } from "react-icons/bs";

const Experiences = () => {
  return (
    <div className="px-5 md:px-28 py-2 md:py-32">
      <div>
        <Text
          title="We provide you Streaming experiences across various devices"
          textTitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere."
          bgTextTitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
          classname="w-[80%]"
        />
      </div>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:mt-10">
        <Card className="bg-linear-to-tr from-neutral-950/100 via-neutral-950 to-red-900/15 px-5 py-7 md:px-10 md:py-15">
          <div className="flex gap-4">
            <RiSmartphoneFill className="inline size-15 px-2 py3 text-red-600 bg-neutral-800 border-2  border-neutral-700 rounded-lg" />
            <Text title="Smartphones" />
          </div>
          <p>
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </Card>
        <Card className="bg-linear-to-tr from-neutral-950/100 via-neutral-950 to-red-900/15 px-5 py-7 md:px-10 md:py-15">
          <div className="flex gap-4">
            <FaTablet className="inline size-15 px-2 py3 text-red-600 bg-neutral-800 border-2  border-neutral-700 rounded-lg" />
            <Text title="Tablet" />
          </div>
          <p>
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </Card>
        <Card className="bg-linear-to-tr from-neutral-950/100 via-neutral-950 to-red-900/15 px-5 py-7 md:px-10 md:py-15">
          <div className="flex gap-4">
            <FaTv className="inline size-15 px-2 py3 text-red-600 bg-neutral-800 border-2  border-neutral-700 rounded-lg" />
            <Text title="Smart TV" />
          </div>
          <p>
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </Card>
        <Card className="bg-linear-to-tr from-neutral-950/100 via-neutral-950 to-red-900/15 px-5 py-7 md:px-10 md:py-15">
          <div className="flex gap-4">
            <BsFillLaptopFill className="inline size-15 px-2 py3 text-red-600 bg-neutral-800 border-2  border-neutral-700 rounded-lg" />
            <Text title="Laptops" />
          </div>
          <p>
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </Card>
        <Card className="bg-linear-to-tr from-neutral-950/100 via-neutral-950 to-red-900/15 px-5 py-7 md:px-10 md:py-15">
          <div className="flex gap-4">
            <FaGamepad className="inline size-15 px-2 py3 text-red-600 bg-neutral-800 border-2  border-neutral-700 rounded-lg" />
            <Text title="Gaming Consoles" />
          </div>
          <p>
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </Card>
        <Card className="bg-linear-to-tr from-neutral-950/100 via-neutral-950 to-red-900/15 px-5 py-7 md:px-10 md:py-15">
          <div className="flex gap-4">
            <BsHeadsetVr className="inline size-15 px-2 py3 text-red-600 bg-neutral-800 border-2  border-neutral-700 rounded-lg" />
            <Text title="VR Headsets" />
          </div>
          <p>
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Experiences;
