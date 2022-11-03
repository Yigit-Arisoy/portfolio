import React from "react";
import GithubContext from "../context/github/GithubContext";
import { useContext } from "react";

function Contact() {
  let { navActive } = useContext(GithubContext);
  return <div className="text-3xl text-primary">My contact information</div>;
}

export default Contact;
