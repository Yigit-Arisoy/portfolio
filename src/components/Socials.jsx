import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

function Socials() {
  return (
    <div className="invisible sm:visible">
      <div className="border-l-2 h-8 translate-x-4 border-gray-600"></div>
      <div className="border-l-2 h-8 translate-x-4 mb-4 border-gray-600"></div>
      <div className="grid grid-cols-1 text-4xl gap-4 ">
        <a
          href="https://github.com/Yigit-Arisoy/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaGithub className="text-neutral hover:text-primary hover:scale-110 duration-100 transition-all ease-in" />
        </a>
        <a
          href="https://www.linkedin.com/in/yigit-arisoy/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaLinkedin className="text-neutral hover:text-primary hover:scale-110 duration-100 transition-all ease-in" />
        </a>

        <a
          href="https://discord.gg/79mjkWtqTj"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaDiscord className="text-neutral hover:text-primary hover:scale-110 duration-100 transition-all ease-in" />
        </a>

        <a
          href="https://www.instagram.com/yigit_arsy/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaInstagram
            className="text-neutral hover:text-primary hover:scale-110 duration-100
      transition-all ease-in"
          />
        </a>
      </div>
      <div className="border-l-2 h-8 translate-x-4 mt-4 border-gray-600"></div>
      <div className="border-l-2 h-8 translate-x-4 border-gray-600"></div>
    </div>
  );
}

export default Socials;
