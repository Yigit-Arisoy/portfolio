import React from "react";

function ProjectNew({ name, picture }) {
  return (
    <div className="project-item">
      <div>
        <img src={String(require(`../media/${picture}`))} alt="" className="" />
      </div>
      <div className="">
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default ProjectNew;
