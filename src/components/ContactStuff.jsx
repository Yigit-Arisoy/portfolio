import React from "react";
import MatrixLetters from "../components/MatrixLetters";

function ContactStuff() {
  return (
    <div>
      <div className="py-2">
        <MatrixLetters />
      </div>
      <div className="w-full min-h-screen flex flex-col justify-center items-cente pb-8">
        <div className="md:w-4/12 mx-auto">
          <div className="">
            <div className="text-primary text-lg sm:text-xl mb-2">
              THE SOURCE
            </div>
            <div className="text-white font-bold text-3xl sm:text-5xl">
              Behind the simulation
            </div>
            <div className="text-neutral mt-8 mb-4 text-sm sm:text-base mx-4 sm:mx-0">
              You take the <span className="text-white">blue pill</span> - you
              keep scrolling, you leave this site and believe whatever you want
              to believe. You take the{" "}
              <span className="text-white">red pill</span> - you stay in
              wonderland, and I show you how deep the rabbit hole goes.
            </div>
            <a
              href="https://github.com/Yigit-Arisoy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="px-6 py-3 bg-neutral-focus rounded-sm text-bgMain text-lg font-semibold">
                Show me
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactStuff;
