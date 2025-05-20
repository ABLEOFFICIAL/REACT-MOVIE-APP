import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" p-5  bg-black">
      <div className="flex flex-wrap pb-10">
        <div className="w-40">
          <a href="#">
            <h3 className="py-4 font-base text-lg">Home</h3>
          </a>
          <div className="flex flex-col">
            <a href="#" className="text-neutral-400 font-light py-1">
              Categories
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              Devices
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              Pricing
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              FAQ
            </a>
          </div>
        </div>
        <div className="w-40">
          <a href="#">
            <h3 className="py-4 font-base text-lg">Movies</h3>
          </a>
          <div className="flex flex-col">
            <a href="#" className="text-neutral-400 font-light py-1">
              Gernes
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              Trending
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              New Release
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              Popular
            </a>
          </div>
        </div>
        <div className="w-40">
          <a href="#">
            <h3 className="py-4 font-base text-lg">Shows</h3>
          </a>
          <div className="flex flex-col">
            <a href="#" className="text-neutral-400 font-light py-1">
              Gernes
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              Trending
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              New Release
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              Popular
            </a>
          </div>
        </div>
        <div className="w-40">
          <a href="#">
            <h3 className="py-4 font-base text-lg">Support</h3>
          </a>
          <div className="flex flex-col">
            <a href="#" className="text-neutral-400 font-light py-1">
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-40">
          <a href="#">
            <h3 className="py-4 font-base text-lg">Subscription</h3>
          </a>
          <div className="flex flex-col">
            <a href="#" className="text-neutral-400 font-light py-1">
              Plans
            </a>
            <a href="#" className="text-neutral-400 font-light py-1">
              Features
            </a>
          </div>
        </div>
        <div className="w-40">
          <a href="#">
            <h3 className="py-4 font-base text-lg">Connect With Us</h3>
          </a>
          <div className="flex w-full justify-between">
            <a href="#" className="text-white font-light py-1">
              <FaFacebook
                size={44}
                className="bg-neutral-900 p-3 rounded-lg border-2 border-neutral-700"
              />
            </a>
            <a href="#" className="text-white font-light py-1">
              <FaTwitter
                size={44}
                className="bg-neutral-900 p-3 rounded-lg border-2 border-neutral-700"
              />
            </a>
            <a href="#" className="text-white font-light py-1">
              <FaLinkedin
                size={44}
                className="bg-neutral-900 p-3 rounded-lg border-2 border-neutral-700"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full text-neutral-700" />
      <div className="py-5">
        <p className="py-3">@2023 streamvib, All Rights Reserved</p>
        <div className="flex justify-between">
          <a
            href="#"
            className="text-neutral-400 font-light text-sm border-r-2 border-r-neutral-700 pr-3"
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="text-neutral-400 font-light text-sm border-r-2 border-r-neutral-700 pr-3"
          >
            Privacy Policy
          </a>
          <a href="#" className="text-neutral-400 font-light text-sm">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
