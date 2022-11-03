import React from "react";
import GithubContext from "../context/github/GithubContext";
import { useContext } from "react";

function About() {
  let { navActive } = useContext(GithubContext);
  return <div className={navActive ? "blurBg" : ""}>About</div>;
}

export default About;
