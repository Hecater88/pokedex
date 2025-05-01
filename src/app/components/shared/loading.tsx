import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center space-x-1 text-lg font-medium">
      <span>Loading</span>
      <span className="animate-bounce [animation-delay:0s]">.</span>
      <span className="animate-bounce [animation-delay:0.2s]">.</span>
      <span className="animate-bounce [animation-delay:0.4s]">.</span>
    </div>
  );
};

export default Loader;
