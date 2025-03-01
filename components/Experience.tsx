import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
          >
            <div className="flex flex-col items-center p-6 md:p-8 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="text-center space-y-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {card.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-3 font-semibold leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
