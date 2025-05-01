import React, { ButtonHTMLAttributes } from "react";

const custom: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} className={`pixel-button px-4 ${props?.className}`}>
      {props.children}
    </button>
  );
};

export default custom;
