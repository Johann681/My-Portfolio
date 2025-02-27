import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about"> 
      <BentoGrid>
        {gridItems.map(({id, title,description, className, img, imgClassName, titleClassName,spareImg}) => (
          <BentoGridItem
            title={title}
            key={id}
            description={description}
            id={id}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
