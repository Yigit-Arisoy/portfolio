import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import MobileNavbar from "./MobileNavbar";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Navbar() {
  const { changeMode, navActive, setNavActive } = useContext(GithubContext);
  const handleTheme = (e) => {
    changeMode();
  };

  const handleMenuClick = () => {
    setNavActive(true);
  };
  return (
    <>
      <MobileNavbar isNavVisible={navActive}></MobileNavbar>
      <div className={navActive ? "blurBg" : ""}>
        <div className="top-0 flex px-2 pt-2 pb-2 justify-between bg-base-300">
          <div className=" items-center ml-2">
            <FaGithub className="inline pr-2 text-4xl mx-2 text-primary-focus"></FaGithub>
            <Link
              to="/"
              className="text-lg font-bold align-middle text-primary-focus"
            >
              Github Search
            </Link>
          </div>

          <div className="hidden sm:flex justify-between mr-10 align-middle">
            <Link to="/" className="btn btn-outline btn-sm btn-primary mx-2">
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-outline btn-sm btn-primary mx-2"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline btn-sm btn-primary mx-2"
            >
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

          <div className="flex sm:hidden align-middle">
            <button onClick={handleMenuClick}>
              <FiMenu className="text-primary-focus text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.defaultProps = {
  title: "Github Search",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
