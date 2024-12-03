import jsonData from "../data.json";
import faviconCart from "../assets/images/icon-add-to-cart.svg";
import { useState } from "react";

export default function Desserts() {
  return (
    <div className="bg-blue-300 w-[80vw] h-[85vh] flex justify-center items-center">
      <div className="grid grid-cols-3 gap-6">
        {jsonData.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow rounded min-h-fit">
            <img
              src={item.image.mobile}
              className="w-auto h-auto object-cover"
            />
            <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            <p className="text-gray-600">{item.category}</p>
            <div className="flex justify-between">
              <p className="text-blue-500 font-semibold">
                ${item.price.toFixed(2)}
              </p>
              <button className="flex ">
                <img src={faviconCart} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
