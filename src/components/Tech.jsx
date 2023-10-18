import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-20 h-20 flex flex-col items-center justify-center" key={technology.name}>
          <img src={technology.icon} alt={technology.name} />
          <p>{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
