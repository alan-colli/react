import React, { useState } from "react";

export default function ClickScreen() {
  const [clickPosition, setClickPosition] = useState(null);

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    setClickPosition({ x: clientX, y: clientY });
    console.log(e);
  };

  return (
    <div className="w-[60vw] h-[60vh] bg-white " onClick={handleClick}></div>
  );
}
