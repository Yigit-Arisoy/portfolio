import React from "react";
import GithubContext from "../context/github/GithubContext";
import { useContext } from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  let { navActive } = useContext(GithubContext);
  return (
    <div className="mx-auto w-9/12">
      <div className="text-3xl text-primary">Contact me</div>
      <div className="grid space-evenly gap-8 mt-8 mx-4 xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 ">
        <div className="mx-auto">
          <a
            href={"https://github.com/Yigit-Arisoy"}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-6xl text-primary-focus"></FaGithub>
          </a>
        </div>
        <div className="mx-auto">
          <a
            href={"https://www.linkedin.com/in/yigit-arisoy/"}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-6xl text-primary-focus"></FaLinkedin>
          </a>
        </div>
        <div className="mx-auto">
          <a
            href={"https://www.instagram.com/yigit_arsy/"}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-6xl text-primary-focus"></FaInstagram>
          </a>
        </div>
        <div className="mx-auto">
          <a
            href={"https://www.youtube.com/channel/UCBL-d07bl8eaLa-92NRh7hQ"}
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="text-6xl text-primary-focus"></FaYoutube>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
