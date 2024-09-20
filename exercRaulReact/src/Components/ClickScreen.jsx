import React, { useState } from "react";

export default function ClickScreen() {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState([]);

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setClickPosition({ x, y });
  };

  const insertPosition = (position) => {
    setPosition((prevArray) => [...prevArray, position]);
  };



  return (
    <div
      className="w-[60vw] h-[60vh] bg-white "
      onClick={}
    ></div>
  );
}
