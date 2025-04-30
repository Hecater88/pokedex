import React, { HTMLAttributes } from "react";

const Badge: React.FC<HTMLAttributes<HTMLSpanElement>> = (props) => {
  return (
    <span {...props} className={`nes-badge ${props?.className}`}>
      <span className="is-dark">{props.children}</span>
    </span>
  );
};

export default Badge;
