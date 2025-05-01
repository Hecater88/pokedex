import React, { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} className={`pixel-button px-4 py-2 ${props?.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
