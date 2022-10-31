import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import React from "react";

const handleTheme = (e) => {
  if (document.documentElement.getAttribute("data-theme") == "forest") {
    document.documentElement.setAttribute("data-theme", "cupcake");
  } else {
    document.documentElement.setAttribute("data-theme", "forest");
  }
};

function Navbar() {
  return (
    /*<nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2 justify-center">
          <FaGithub className="inline pr-2 text-4xl"></FaGithub>
          <Link to="/" className="text-lg font-bold align-middle">
            Github Search
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>*/

    <div className=" flex  px-2 pt-2 pb-2  justify-between bg-base-200">
      <div className="flex-none items-center ml-2">
        <FaGithub className="inline pr-2 text-4xl mx-2"></FaGithub>
        <Link to="/" className="text-lg font-bold align-middle">
          Github Search
        </Link>
      </div>

      <div className="flex justify-between mr-10 align-middle">
        <Link to="/" className="btn btn-outline btn-sm btn-primary mx-2">
          Home
        </Link>
        <Link to="/about" className="btn btn-outline btn-sm btn-primary mx-2">
          About
        </Link>
        <Link to="/contact" className="btn btn-outline btn-sm btn-primary mx-2">
          Contact
        </Link>

        <label class="swap swap-rotate">
          <input type="checkbox" onChange={handleTheme} />

          <MdDarkMode
            class="swap-on fill-current text-3xl "
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "#1EB854" }}
          ></MdDarkMode>

          <MdLightMode
            class="swap-off fill-current text-3xl"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "#65C3C8" }}
          ></MdLightMode>
        </label>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Github Search",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
