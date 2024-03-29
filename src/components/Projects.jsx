import React from "react";
import Project from "./Project";
import ProjectNew from "./ProjectNew";

function Projects() {
  return (
    <div data-aos="fade-up" data-aos-duration="500" className=" bg-bgSecond">
      <div id="projects" className="">
        <h1 className="text-5xl text-primary font-bold pt-16 mb-16 ">
          Projects
        </h1>
        <div className="min-h-screen">
          <div className="projectList  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-8 md:mx-48 lg:mx-64 xl:mx-96 justify-items-center pb-32">
            <Project
              picture={"crafterhaven.png"}
              name="Crafter Haven"
              link={"https://crafterhaven.com"}
              desc={"The most detailed calculator tool for Albion Online"}
            ></Project>

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
      </div>
    </div>
  );
}

export default Projects;
