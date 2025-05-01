import React, { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input {...props} className={`nes-input ${props?.className} text-xl`} />
  );
};

export default Input;
