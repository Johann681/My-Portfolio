import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-16" 
    id="project"
    >
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">Recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-8 gap-y-10 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[35rem] h-[28rem] lg:min-h-[30rem] flex items-center justify-center sm:w-[500px] w-[85vw] max-w-[550px] p-3"
          >
            <PinContainer title='Dive' href={link}>
              <div className="relative flex items-center justify-center sm:w-[500px] w-[85vw] max-w-[550px] overflow-hidden h-[18vh] sm:h-[35vh] mb-8">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#090d27] px-16">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-xl md:text-lg text-sm line-clamp-1">
                {title}
              </h1>
              <p className="line-clamp-2 lg:text-lg lg:font-normal font-light text-xs ">
                {des}
              </p>
              <div className="flex items-center justify-between mt-5 mb-2">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-8 w-7 lg:h-8 h-7 flex items-center justify-center" style={{ transform: `translateX(-${3 * index}px)` }}>
                      <img src={icon} alt={icon} className="p-1.5" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-xs text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-2" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
