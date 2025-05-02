import React from "react";
import ProgressBar from "../shared/progess";

const HealthComponent = ({
  value = 0,
  max,
}: {
  value: number | null;
  max: number;
}) => {
  return (
    <div className="flex flex-col">
      <ProgressBar
        value={value ? value : 0}
        max={max}
        style={{ height: "2rem" }}
      />
      <div className="flex justify-between">
        <span>{value ? value : 0}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default HealthComponent;
