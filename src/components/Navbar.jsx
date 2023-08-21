import React from "react";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "./Menu/MobileMenu";
import MenuButton from "./Menu/MenuButton";
import Name from "./Navbar/Name";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };
  const didMountRef = useRef(false);

  // useEffect(() => {
  //   let menuItemTimeOut, menuTimeOut;
  //   if (didMountRef.current) {
  //     let menuItems = Array.from(
  //       document.getElementsByClassName("mobileMenuItem")
  //     );

  //     menuItems.forEach((e, i) => {
  //       let delay = 25;

  //       menuItemTimeOut = setTimeout(() => {
  //         if (e.classList.contains("slideIn")) {
  //           e.classList.toggle("slideIn");
  //           e.classList.toggle("mobileMenuItemOffset");
  //         } else {
  //           e.classList.toggle("slideIn");
  //           e.classList.toggle("mobileMenuItemOffset");
  //         }
  //       }, delay * i * 3);
  //     });

  //     if (!document.querySelector("#mobileMenu").classList.contains("hidden")) {
  //       setTimeout(() => {
  //         document.querySelector("#mobileMenu").classList.add("hidden");
  //       }, 500);
  //     } else {
  //       document.querySelector("#mobileMenu").classList.remove("hidden");
  //     }
  //   } else {
  //     didMountRef.current = true;
  //   }

  //   return () => {
  //     clearTimeout(menuItemTimeOut);
  //     clearTimeout(menuTimeOut);
  //   };
  // }, [menuVisible]);

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="hidden md:block px-32 py-4 py-2 text-xl text-primary transition-colors duration-500 border-transparent bg-transparent backdrop-blur-md border-neutral-content border-b-[1px]">
        <div className="grid grid-cols-3 justify-between items-center content-center">
          <div className="flex items-center gap-8 justify-start">
            <div>
              <a href="#about" className="after:bg-primary">
                About
              </a>
            </div>
            <div>
              <a href="#skills" className="after:bg-primary">
                Skills
              </a>
            </div>
            <div>
              <a href="#projects" className="after:bg-primary">
                Projects
              </a>{" "}
            </div>
          </div>
          <Name />
          <div className="flex items-center justify-end">
            <a
              href="https://drive.google.com/file/d/1SGf1YCsHSIQFtuV55uzC3pcFk0SSm1BQ/view?usp=sharing"
              target={"_blank"}
              rel={"noreferrer"}
              className="after:bg-primary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

{
  /*       <div className="md:hidden">
        <div>
          <MenuButton handleMenuClick={handleMenuClick} />
        </div>
        <MobileMenu
          handleMenuClick={handleMenuClick}
          setMenuVisible={setMenuVisible}
        />
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
</div> */
}
