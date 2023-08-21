import React from "react";
import Letter from "./Letter";
import { useState } from "react";

function Message({ message, delay }) {
  return (
    <div>
      {message.split("").map((item, i) => {
        return <Letter letter={item} delay={i * 50 + delay} />;
      })}
    </div>
  );
}

export default Message;
