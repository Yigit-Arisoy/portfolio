import React from "react";

function Navbar() {
  return (
    <div className="mx-8 mt-8 text-xl text-primary relative z-10">
      <div className="flex justify-between">
        <div className="text-primary text-4xl font-bold mb-4">Yiğit Arısoy</div>
        <div className="md:hidden">Menu</div>
        <div className="hidden md:flex flex justify-between gap-8">
          <div>About</div>
          <div>Experience</div>
          <div>Projects</div>
          <div>Contact</div>
          <div>Resume</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
