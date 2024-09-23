import Button from "./Button";
import ClickScreen from "./ClickScreen";
import React, { useState } from "react";

export default function Bodypage() {
  const [clickPosition, setClickPosition] = useState([]);
  const [message, setMessage] = useState("");

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setClickPosition([...clickPosition, { x, y }]);
  };

  const onButtonClick = () => {
    if (clickPosition.length !== 0) {
      setClickPosition(clickPosition.slice(0, -1));
      setMessage("");
    } else {
      setMessage("Não há pontos para remover");
    }
  };

  return (
    <div className=" bg-gray-500 w-screen h-screen flex  flex-col items-center">
      {message && (
        <div className="bg-red-500 text-white p-2 rounded mt-4">{message}</div>
      )}
      <div
        id="header"
        className="bg-gray-300 w-[60vw] h-[5vh] flex justify-center items-center mt-24 rounded-t-[8px] "
      >
        <h1 className="font-bold text-3xl font-serif">
          Clique abaixo para marcar
        </h1>
      </div>
      <ClickScreen
        clickPosition={clickPosition}
        handleClick={handleClick}
      ></ClickScreen>
      <div
        id="footer"
        className="w-[60vw] h-[5vh] bg-gray-300 rounded-b-[8px] flex flex-col justify-center items-center"
      >
        <Button onButtonClick={onButtonClick}></Button>
      </div>
    </div>
  );
}
