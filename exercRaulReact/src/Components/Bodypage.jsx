import ButtonDelete from "./ButtonDelete";
import ButtonReDo from "./ButtonReDo";
import ClickScreen from "./ClickScreen";
import React, { useState } from "react";

export default function Bodypage() {
  const [clickPosition, setClickPosition] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setClickPosition([...clickPosition, { x, y }]);
  };

  const onButtonDeleteClick = () => {
    const removedItem = clickPosition[clickPosition.length - 1];
    setClickPosition(clickPosition.slice(0, -1));
    setDeleted((deleted) => [...deleted, removedItem]);
  };

  const onButtonReDoClick = () => {
    if (deleted.length > 0) {
      const restoredItem = deleted[deleted.length - 1];
      setDeleted(deleted.slice(0, -1));
      setClickPosition((prevClickPosition) => [
        ...prevClickPosition,
        restoredItem,
      ]);
    }
  };

  return (
    <div className=" bg-gray-500 w-screen h-screen flex  flex-col items-center">
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
        className="w-[60vw] h-[5vh] bg-gray-300 rounded-b-[8px] flex  justify-center items-center space-x-4"
      >
        {clickPosition.length > 0 && (
          <ButtonDelete
            onButtonDeleteClick={onButtonDeleteClick}
          ></ButtonDelete>
        )}
        {deleted.length > 0 && (
          <ButtonReDo onButtonReDoClick={onButtonReDoClick}></ButtonReDo>
        )}
      </div>
    </div>
  );
}
