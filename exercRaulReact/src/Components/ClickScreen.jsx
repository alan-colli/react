import React, { useState } from "react";

export default function ClickScreen() {
  const [clickPosition, setClickPosition] = useState([]);

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setClickPosition([...clickPosition, { x, y }]);
    console.log(clickPosition);
  };

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
