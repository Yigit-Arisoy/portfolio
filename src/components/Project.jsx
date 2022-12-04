import React from "react";

function Project({ name, picture, link, desc }) {
  return (
    <div className="card bg-bgSecond projectShadow projectContainer relative">
      <div className="projectCard">
        <div className="projectFront">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              src={String(require(`../media/${picture}`))}
              alt=""
              className="w-48 px-4"
            />
            <p className="text-primary font-semibold pb-2 text-2xl mt-2">
              {name}
            </p>
          </a>
        </div>
        <div className="projectBack bg-bgSecond text-primary font-semibold pb-2 pt-8 sm:pt-12">
          <a href={link} target="_blank" rel="noreferrer">
            <button className="btn btn-outline btn-primary">
              <a href={link}>Check it Out</a>
            </button>

            <p className="mt-4 mx-2">{desc}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
