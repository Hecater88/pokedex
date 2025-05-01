import React, { HTMLAttributes } from "react";

const Badge: React.FC<HTMLAttributes<HTMLSpanElement>> = (props) => {
  return (
    <span
      {...props}
      className={`w-[10.5em] h-[1.875em] m-[0.5em] text-[0.9em] inline-block relative text-white text-center pixel-button ${
        props.className || ""
      }`}
    >
      <span className="">{props.children}</span>
    </span>
  );
};

export default Badge;
