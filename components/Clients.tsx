import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { companies } from "@/data";

const Clients = () => {
  return (
    <div>
      {" "}
      <div className="py-16" id="testimonials">
        <h1 className="heading">
          Kind words from {""}
          <span className="text-purple">Satisfied Clients</span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
       <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 max-lg:mt-10">
  {companies.map(({ id, img, name, nameImg }) => (
    <div key={id} className="flex flex-col items-center md:max-w-40 max-w-14 gap-1">
      <img src={nameImg} alt={name} className="md:w-6 w-3" />
      <img src={img} alt={name} className="md:w-14 w-10" />
      <p className="text-base md:text-lg text-center text-gray-300">{name}</p>
    </div>
  ))}
</div>
 


        </div>
      </div>
    </div>
  );
};

export default Clients;
