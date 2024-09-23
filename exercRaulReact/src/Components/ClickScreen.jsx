import React, { useState } from "react";

export default function ClickScreen({ clickPosition, handleClick }) {
  return (
    <div className="relative w-[60vw] h-[60vh] bg-white" onClick={handleClick}>
      {clickPosition.map((click, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-red-600 flex items-center justify-center rounded"
          style={{
            left: `${click.x}px`,
            top: `${click.y}px`,
          }}
        ></div>
      ))}
    </div>
  );
}
