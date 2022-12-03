import React from "react";

function About() {
  return (
    <div className="h-[150vh] sm:h-[75vh] bg-bgSecond sm:pt-16">
      <h1 className="text-primary font-bold text-4xl sm:text-5xl text-center pt-16">
        Who I Am
      </h1>
      <div className="flex flex-col sm:flex-row justify-center mx-12 sm:mx-0 items-center sm:mb-0">
        <div className="text-left mt-16 sm:text-left text-neutral sm:w-4/12 sm:mr-8 text-lg order-2 sm:order-1">
          <div>
            Hello! My name is Yiğit Arısoy and I am a software engineer based in
            Ankara / Turkey. My interest in software began 6 years ago when I
            started reading my brothers old C++ book and I never stopped since!
          </div>
          <br />
          <div className="">
            With a background in electronics and a passion for software
            development, I had the chance of working on many different projects
            over the years, ranging from
            <span className="text-primary"> Embedded Systems</span> in IOT
            projects to
            <span className="text-primary"> Mobile Games</span> using Unity /
            Blender,{" "}
            <span className="text-primary"> Deep Reinforcement Learning</span>{" "}
            in RTS games and most recently{" "}
            <span className="text-primary"> Web Development</span> with React.
          </div>
        </div>

        <div className="order-1 sm:order-2 ">
          <img
            src={require("../media/yigit.png")}
            alt="qwe"
            className="mt-16 sm:mt-0 rounded-full w-48 sm:w-64 shadow-md shadow-primary imageFilter z-20"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
