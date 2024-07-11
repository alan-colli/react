import React from "react";
import Results from "./Results";

export default function BackSpace() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white h-96 w-2/3 rounded-3xl p-10 flex">
        <div className="w-1/2">
          <p className="pb-4">Bill</p>
          <div className="relative">
            <span className="absolute right-64 inset-y-2 text-black">$</span>
            <input
              type="number"
              name="price"
              id="price"
              className="block rounded-md border-0 py-1.5 pl-8 pr-4 text-gray-900 bg-blue-100 placeholder:text-gray-400 w-36 placeholder:text-center"
              placeholder="0.00"
            />
          </div>
          <p className="pt-4 pb-4">Select tip %</p>
          <div className="grid grid-cols-3 gap-4 w-1/2 pb-4">
            <button className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105">
              5%
            </button>
            <button className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105">
              10%
            </button>
            <button className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105">
              15%
            </button>
            <button className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105">
              20%
            </button>
            <button className="bg-buttonNormal text-gray-100 w-16 h-8 rounded-md hover:scale-105">
              25%
            </button>
            <button className="bg-gray-100 text-buttonNormal w-16 h-8 rounded-md hover:scale-105">
              Custom
            </button>
          </div>
          <p className="pb-4">Amount of people</p>
          <div className="relative">
            <span className="absolute right-64 inset-y-2 text-black">
              People
            </span>
            <input
              type="number"
              name="people"
              id="people"
              className="block rounded-md border-0 py-1.5 pl-8 pr-4 text-gray-900 bg-blue-100 placeholder:text-gray-400 w-36 placeholder:text-center"
              placeholder="0"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Results />
        </div>
      </div>
    </div>
  );
}
