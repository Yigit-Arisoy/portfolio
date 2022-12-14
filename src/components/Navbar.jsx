import React from "react";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const handleMenu = () => {
    document.querySelector("#mobileNav").classList.toggle("bottom-0");
    document.querySelector("#mobileNav").classList.toggle("opacity-100");
    document.querySelector("#mobileNav").classList.toggle("h-0");
  };

  return (
    <div>
      <div className="mx-8 mt-8 text-xl text-primary relative z-10">
        <div className="flex justify-between items-center content-center">
          <div className="text-primary text-3xl font-bold">Yiğit Arısoy</div>
          <div className="md:hidden text-4xl">
            <button className="" onClick={handleMenu}>
              <FiMenu></FiMenu>
            </button>
          </div>

          <div className="hidden md:flex flex justify-between gap-8">
            <div className="">
              <a href="#about" className="">
                About
              </a>
            </div>
            <div>
              <a href="#skills">Skills</a>{" "}
            </div>
            <div>
              <a href="#projects">Projects</a>{" "}
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1SGf1YCsHSIQFtuV55uzC3pcFk0SSm1BQ/view?usp=sharing"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Resume
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        id={"mobileNav"}
        className="relative h-0 text-primary font-semibold grid grid-row-4 justify-center px-12 gap-4 text-center mt-4 pt-4 pb-4 bg-bgSecond bottom-64 transition-all duration-500 opacity-0"
      >
        <div className="">
          <a href="#about" className="">
            About
          </a>
        </div>
        <div>
          <a href="#skills">Skills</a>{" "}
        </div>
        <div>
          <a href="#projects">Projects</a>{" "}
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1SGf1YCsHSIQFtuV55uzC3pcFk0SSm1BQ/view?usp=sharing"
            target={"_blank"}
            rel={"noreferrer"}
          >
            Resume
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
