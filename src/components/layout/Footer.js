import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function Footer() {
  let year = new Date().getFullYear();
  let { navActive } = useContext(GithubContext);
  return (
    <footer
      className={`footer footer-center mb-4 mt-8 ${navActive ? "blurBg" : ""}`}
    >
      &copy; Yiğit Arısoy {year}
    </footer>
  );
}

export default Footer;
