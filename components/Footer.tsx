import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 mb-[100px] md:mb-1 " id="contact">
      <div className="flex-col flex items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Take <span className="text-purple">A step foward </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me and lef&apos;s dicuss how your imagination becomes
          reality
        </p>
        <a href="mailto:adekolaolaonipekun@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2025 Adekola{" "}
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border-black-300"
            >
              <Image
                src={profile.img}
                alt={profile.id}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
