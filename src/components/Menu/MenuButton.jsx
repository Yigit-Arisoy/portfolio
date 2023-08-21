import React from "react";
import { BiMenu } from "react-icons/bi";

function MenuButton({ handleMenuClick }) {
  return (
    <div>
      <button onClick={handleMenuClick}>
        <BiMenu className="text-4xl" />
      </button>
    </div>
  );
}

export default MenuButton;
