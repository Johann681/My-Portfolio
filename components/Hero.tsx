import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue  " />
        <Spotlight
          className="top-40 left-60 md:-left-32 w-[50vw]   h-screen"
          fill="white"
        />
        <Spotlight
          className="top-30 left-full h-[60vh] w-[50vw]"
          fill="purple"
        />
      </div>

      <div className="h-screen  w-full dark:bg-black-100   dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0 bg-purple ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-40 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Introducing Lotus.
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl "
            words="Standing out among millions of developers bringing the future to frontend   "
          />

          <p className="text-center  md:tracking-wider  text-sm md:text-lg lg:text-2xl m-5">
            Hi, I &apos;m a Frontend Developer based in Nigeria
          </p>

          <p className=" text-center">
            <span href="#about">
              <MagicButton
                title="Show my art"
                icon={<FaLocationArrow />}
                position="right"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
