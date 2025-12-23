import React from "react";

const FloatingCircles: React.FC = () => {
  return (
    <div className="floating-circles" aria-hidden="true">
      <svg viewBox="0 0 1600 1200" role="presentation" focusable="false">
        <g className="circle circle-1">
          <circle cx="280" cy="260" r="180" />
        </g>
        <g className="circle circle-2">
          <circle cx="1220" cy="320" r="220" />
        </g>
        <g className="circle circle-3">
          <circle cx="460" cy="900" r="200" />
        </g>
        <g className="circle circle-4">
          <circle cx="1180" cy="860" r="160" />
        </g>
      </svg>
    </div>
  );
};

export default FloatingCircles;
