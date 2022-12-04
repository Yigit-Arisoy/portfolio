import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <div>
      <h1 className="text-5xl text-primary font-bold mb-16">Projects</h1>
      <div className="projectList grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-8 md:mx-48 lg:mx-64 xl:mx-96 justify-items-center mb-32">
        <Project
          picture={"Octocat.png"}
          name="Github Search"
          link={"https://yigitarisoy-githubsearch.netlify.app/"}
          desc={"Website for searching and displaying GitHub users"}
        ></Project>

        <Project
          picture={"cocktail.png"}
          name="Shots by Yiğit"
          link={"https://shotsbyyigit.vercel.app/"}
          desc={"Recipe website featuring hundreds of cocktails"}
        ></Project>

        <Project
          picture={"iot.png"}
          name="Weather IOT"
          link={"https://www.youtube.com/watch?v=3whqq_4aRAw"}
          desc={"Project with Mcus / ML / Web dev"}
        ></Project>
      </div>
    </div>
  );
}

export default Projects;
