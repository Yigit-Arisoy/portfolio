import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div id="skills">
      <div className="bg-bgMain">
        <h1 className="text-5xl text-primary font-bold pt-8 sm:pt-16">
          Skills
        </h1>
        <div className="min-h-screen pb-16 sm:pb-32 pt-16 sm:pt-32 bg-base-100 sm:mx-16 md:mx-16 lg:mx-32 xl:mx-96 ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-8">
            {/*  */}
            <div>
              <Skill name={"javascript"} title={"Javascript"}></Skill>
            </div>
            <div>
              {" "}
              <Skill name={"css3"} title={"CSS"}></Skill>
            </div>
            <div>
              <Skill name={"html5"} title={"HTML5"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"react"} title={"React"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"express"} title={"Express.js"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"nodejs"} title={"Node.js"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"electron"} title={"Electron.js"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"mongodb"} title={"MongoDb"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"webpack"} title={"Webpack"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"bootstrap"} title={"Bootstrap"}></Skill>{" "}
            </div>
            <div>
              <div data-aos="fade-up" data-aos-duration="500">
                <div className="flex flex-row text-sm sm:text-lg text-neutral font-semibold hover:text-primary transition-all duration-200 items-center bg-bgSecond hover:scale-110 card w-32 sm:w-48 pt-1 pb-1 pl-1">
                  <img
                    alt=""
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    class="w-8 sm:w-12"
                  ></img>
                  <p className="ml-1 sm:ml-4">Tailwind</p>
                </div>{" "}
              </div>
            </div>
            <div>
              <Skill name={"jquery"} title={"jQuery"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"linux"} title={"Linux"}></Skill>{" "}
            </div>
            <div>
              <Skill name={"cplusplus"} title={"C++"}></Skill>{" "}
            </div>
            <div>
              {" "}
              <Skill name={"c"} title={"C"}></Skill>{" "}
            </div>
            <div>
              {" "}
              <Skill name={"python"} title={"Python"}></Skill>{" "}
            </div>
            <div>
              {" "}
              <Skill name={"csharp"} title={"C#"}></Skill>
            </div>
            <div>
              <Skill name={"unity"} title={"Unity"}></Skill>{" "}
            </div>

            <div>
              <Skill name={"blender"} title={"Blender"}></Skill>
            </div>
            <div>
              <Skill name={"java"} title={"Java"}></Skill>
            </div>
            <div>
              <Skill name={"git"} title={"Git"}></Skill>
            </div>
            <div>
              <div data-aos="fade-up" data-aos-duration="500">
                <div className="flex flex-row text-sm sm:text-lg text-neutral font-semibold hover:text-primary transition-all duration-200 items-center bg-bgSecond hover:scale-110 card w-32 sm:w-48 pt-1 pb-1 pl-1">
                  <img
                    alt=""
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    class="w-8 sm:w-12"
                  ></img>
                  <p className="ml-1 sm:ml-4">Postman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
