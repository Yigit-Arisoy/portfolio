import React from "react";
import MobileMenuItem from "./MobileMenuItem";
import { Link } from "react-router-dom";

function MobileMenu({ className, setMenuVisible }) {
  return (
    <div className="hidden" id="mobileMenu">
      <div
        className={`absolute w-full h-screen flex flex-col justify-stretch pb-8 content-center ${className}`}
      >
        <MobileMenuItem setMenuVisible={setMenuVisible}>
          <div></div>
        </MobileMenuItem>

        <MobileMenuItem setMenuVisible={setMenuVisible}>
          <div>
            <div className="">About</div>
          </div>
        </MobileMenuItem>
        <MobileMenuItem setMenuVisible={setMenuVisible}>
          <div>
            <div className="">Contact</div>
          </div>
        </MobileMenuItem>

        <MobileMenuItem setMenuVisible={setMenuVisible}>
          <div></div>
        </MobileMenuItem>
      </div>
    </div>
  );
}

export default MobileMenu;
