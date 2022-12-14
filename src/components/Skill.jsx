import React from "react";

function Skill({ name, title }) {
  return (
    <div data-aos="fade-up" data-aos-duration="500">
      <div className="flex flex-row text-sm sm:text-lg text-neutral font-semibold hover:text-primary transition-all duration-200 items-center bg-bgSecond hover:scale-110 card w-32 sm:w-48 pt-1 pb-1 pl-1">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
          className="w-8 sm:w-12"
        />
        <p className="ml-1 sm:ml-4">{title}</p>
      </div>
    </div>
  );
}

export default Skill;
