import React from "react";

function Project({ name, picture, link, desc }) {
  return (
    <div className="card bg-bgSecond projectShadow projectContainer relative">
      <div className="projectCard w-48 h-48">
        <div className="projectFront">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              src={String(require(`../media/${picture}`))}
              alt=""
              className="w-32 sm:w-32 mx-auto mt-2"
            />
            <p className="text-primary font-semibold pb-2 text-lg sm:text-2xl mt-4">
              {name}
            </p>
          </a>
        </div>
        <div className="projectBack bg-bgSecond text-primary font-semibold pb-2 pt-4 sm:pt-8 sm:pt-12">
          <a href={link} target="_blank" rel="noreferrer">
            <button className="btn btn-outline btn-primary">
              <a href={link}>Check it Out</a>
            </button>

            <p className="mt-2 mx-2 text-sm sm:text-md">{desc}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
