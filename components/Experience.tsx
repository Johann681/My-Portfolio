import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-16 text-white" id="testimonials"> 
  <h1 className="text-3xl md:text-4xl font-bold text-center">
    My <span className="text-purple-500">Work Experience</span>
  </h1>

  <div className="w-full mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {workExperience.map((card) => (
      <Button
        key={card.id}
        style={{ borderRadius: "2rem" }}
        className="transition duration-300 p-6 flex flex-col items-center shadow-lg rounded-2xl"
        duration={Math.floor(Math.random() * 10000) + 10000}
      >
        <img
          src={card.thumbnail}
          alt={card.title}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-purple-500 
          transition-transform duration-700 hover:rotate-[360deg]"
        />
        <div className="text-center mt-4">
          <h2 className="text-lg md:text-xl font-bold">{card.title}</h2>
          <p className="mt-2 text-gray-400">{card.desc}</p>
        </div>
      </Button>
    ))}
  </div>
</div>

  );
};

export default Experience;
