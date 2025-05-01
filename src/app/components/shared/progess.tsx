import React, { ProgressHTMLAttributes } from "react";

const ProgressBar: React.FC<ProgressHTMLAttributes<HTMLProgressElement>> = (
  props
) => {
  return (
    <progress
      {...props}
      className={`nes-progress is-success ${props?.className}`}
    />
  );
};

export default ProgressBar;
