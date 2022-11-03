import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { IoIosCloseCircleOutline } from "react-icons/io";

function MobileNavbar(props) {
  const { changeMode, setNavActive } = useContext(GithubContext);
  const handleTheme = (e) => {
    changeMode();
  };

  const handleNavClose = () => {
    setNavActive(false);
  };
  return (
    <div className={props.isNavVisible ? "block" : "hidden"}>
      <div className="z-10 absolute  w-screen h-screen bg-black opacity-70 ">
        <button onClick={handleNavClose}>
          <IoIosCloseCircleOutline className="text-primary-focus text-3xl absolute top-4 right-4"></IoIosCloseCircleOutline>
        </button>
        <div className="grid grid-rows-4 gap-6 h-6/12 justify-center mt-32">
          <Link
            to="/"
            className="btn btn-outline btn-sm btn-primary mx-2"
            onClick={handleNavClose}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="btn btn-outline btn-sm btn-primary mx-2"
            onClick={handleNavClose}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="btn btn-outline btn-sm btn-primary mx-2"
            onClick={handleNavClose}
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
      </div>
    </div>
  );
}

export default MobileNavbar;
