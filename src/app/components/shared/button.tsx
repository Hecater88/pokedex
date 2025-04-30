import React, { ButtonHTMLAttributes } from "react";

const custom: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} className={`nes-btn ${props?.className}`}>
      {props.children}
    </button>
  );
};

export default custom;
