import React from "react";
import Message from "./Message";

function Introduction() {
  return (
    <div>
      <div className="backgroundVideo z-0"></div>
      <div className="pt-16 sm:pt-64 sm:pb-0 sm:h-[75vh] px-16 lg:px-96">
        <div className="text-left text-primary text-xl sm:text-2xl mb-4">
          <Message message={"Hi! I am"} delay={0} />
        </div>
        <div className="text-left text-primary text-5xl sm:text-6xl  font-bold mb-3">
          <Message message={"Yiğit Arısoy."} delay={750} />
        </div>
        <div className="text-left text-neutral-focus text-2xl sm:text-4xl font-semibold mb-6 mt-8">
          <Message message={"I build things for computers."} delay={1600} />
        </div>
        <div className="text-left text-neutral text-xl font-semibold sm:w-96">
          <Message
            message={
              "Software engineer with a passion for creating amazing software."
            }
            delay={2750}
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
