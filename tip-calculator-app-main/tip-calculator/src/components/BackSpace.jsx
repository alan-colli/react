import { parse } from "postcss";
import React, { useState } from "react";

export default function BackSpace() {
  const [price, setPrice] = useState();
  const [people, setPeople] = useState(1);
  const [selectedTip, setSelectedTip] = useState(null);
  const [custom, setCustom] = useState(0);

  function onInputChangePrice(e) {
    setPrice(e.target.value);
  }

  function onInputChangePeople(e) {
    setPeople(e.target.value);
  }

  function onSelectedTip(tip) {
    setSelectedTip(tip);
  }

  function calculateTipAmount() {
    if (selectedTip && price) {
      return (price * selectedTip).toFixed(2);
    }
    return "0.00";
  }

  function calculatePerPerson() {
    const tipAmount = calculateTipAmount();
    const totalAmount = parseFloat(price) + parseFloat(tipAmount);
    return (totalAmount / people).toFixed(2);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white h-96 w-2/3 rounded-3xl p-10 flex">
        <div className="w-1/2">
          <p className="pb-4">Bill</p>
          <div className="relative">
            <span className="absolute right-80 inset-y-2 text-black">$</span>
            <input
              type="number"
              value={price}
              className="block rounded-md border-0 py-1.5 pl-8 pr-4 text-gray-900 bg-blue-100 placeholder:text-gray-400 w-40 placeholder:text-center"
              placeholder="0.00"
              onChange={onInputChangePrice}
            />
          </div>
          <p className="pt-4 pb-4">Select tip %</p>
          <div className="grid grid-cols-3 gap-4 w-1/2 pb-4">
            <button
              className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105"
              onClick={() => onSelectedTip(0.05)}
            >
              5%
            </button>
            <button
              className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105"
              onClick={() => onSelectedTip(0.1)}
            >
              10%
            </button>
            <button
              className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105"
              onClick={() => onSelectedTip(0.15)}
            >
              15%
            </button>
            <button
              className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105"
              onClick={() => onSelectedTip(0.2)}
            >
              20%
            </button>
            <button
              className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105"
              onClick={() => onSelectedTip(0.25)}
            >
              25%
            </button>
            <input
              type="number"
              value={price}
              className="block rounded-md border-0 py-1.5 pl-8 pr-4 text-gray-900 bg-blue-100 placeholder:text-gray-400 w-16 placeholder:text-center"
              placeholder="0.00"
              onChange={onInputChangePrice}
            />
          </div>
          <p className="pb-4">Amount of people</p>
          <div className="relative">
            <span className="absolute right-80 inset-y-2 text-black">
              People
            </span>
            <input
              type="number"
              value={people}
              className="block rounded-md border-0 py-1.5 pl-8 pr-4 text-gray-900 bg-blue-100 placeholder:text-gray-400 w-40 placeholder:text-center"
              placeholder="0"
              onChange={onInputChangePeople}
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-full h-full bg-buttonNormal flex flex-col rounded-3xl">
            <div className="flex justify-between px-8 pt-20">
              <p className="text-white text-lg">Tip Amount</p>
              <p className="text-white pr-12 text-3xl">
                {calculateTipAmount()}
              </p>
            </div>
            <div className="flex justify-between px-8 pt-20">
              <p className="text-white text-lg">
                Total Amount
                <br />
                /Person
              </p>
              <p className="text-white pr-12 text-3xl">
                {calculatePerPerson()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
