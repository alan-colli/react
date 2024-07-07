export default function BackSpace() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white h-96 w-2/3 rounded-3xl jutify-start items-start p-10">
        <div>
          <p className="pb-4">Bill</p>
          <div>
            <input
              type="number"
              name="price"
              id="price"
              className="block rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 bg-blue-100 placeholder:text-gray-400 w-36 placeholder:text-center"
              placeholder="$ 0.00"
            />
            <span className="absolute inset-y-0 right-3  text-gray-500">$</span>
          </div>
          <p className="pt-4 pb-4">Select tip %</p>
          <div className="grid grid-cols-3 gap-2 w-1/2 pb-4">
            <button className="bg-buttonNormal text-gray-100 w-28 h-8 rounded-md hover:scale-105">
              5%
            </button>
            <button className="bg-buttonNormal text-gray-100 w-28 h-8 rounded-md hover:scale-105">
              10%
            </button>
            <button className="bg-buttonNormal text-gray-100 w-28 h-8 rounded-md hover:scale-105">
              15%
            </button>
            <button className="bg-buttonNormal text-gray-100 w-28 h-8 rounded-md hover:scale-105">
              20%
            </button>
            <button className="bg-buttonNormal text-gray-100 w-28 h-8 rounded-md hover:scale-105">
              25%
            </button>
            <button className="bg-gray-100 bg-buttonNormal w-28 h-8 rounded-md hover:scale-105">
              Custom
            </button>
          </div>
          <p className="pb-4">Amount of people</p>
          <div>
            <input
              type="number"
              name="price"
              id="price"
              className="block rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 bg-blue-100 placeholder:text-gray-400 w-36 placeholder:text-center"
              placeholder="0"
            />
            <span className="absolute  right-3 text-black">$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
