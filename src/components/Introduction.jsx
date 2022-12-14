import React from "react";
import Message from "./Message";

function Introduction() {
  return (
    <div>
      <video
        src={require("../media/bgVideo.mp4")}
        autoPlay
        loop
        className=" hidden sm:block absolute top-0 left-0 z-0 opacity-50"
      ></video>

      <div className="mt-4 sm:mt-48 h-screen sm:pb-0 sm:h-[75vh] mx-16">
        <div className="text-left text-primary text-2xl mb-4">
          <Message message={"Hi! I am"} delay={0} />
        </div>
        <div className="text-left text-primary text-6xl  font-bold mb-3">
          <Message message={"Yiğit Arısoy."} delay={800} />
        </div>
        <div className="text-left text-neutral-focus text-4xl font-semibold mb-6 mt-8">
          <Message message={"I build things for computers."} delay={1200} />
        </div>
        <div className="text-left text-neutral text-xl font-semibold sm:w-96">
          <Message
            message={
              "Software engineer with a passion for creating amazing software."
            }
            delay={2300}
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
