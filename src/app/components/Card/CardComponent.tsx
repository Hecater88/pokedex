import React from "react";
import "./CardComponent.css";

const CardComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="pixel-box p-2">{children}</div>;
};

export default CardComponent;
