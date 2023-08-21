import React from "react";

function MobileMenuItem({ children, setMenuVisible }) {
  return (
    <div
      className={`mobileMenuItem mobileMenuItemOffset bg-background-lightish py-8 text-3xl text-center text-bright flex-1`}
      onClick={() => {
        setMenuVisible(false);
      }}
    >
      <div className="drop-shadow-[0_0_3px_#64FCF2] rounded-lg inline-block px-4 py-2">
        {children}
      </div>
    </div>
  );
}

export default MobileMenuItem;
