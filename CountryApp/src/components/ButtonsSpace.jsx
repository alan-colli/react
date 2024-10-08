export default function ButtonsSpace({ handleShowModal }) {
  return (
    <div className="bg-gray-100 h-[70vh] w-[80vw] rounded-b-md flex-col flex ">
      <div className="grid grid-cols-2 gap-4 w-full h-full  justify-items-center">
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("brazil")}
        >
          Brazil
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("germany")}
        >
          Germany
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw]  hover:bg-green-300"
          onClick={() => handleShowModal("united states")}
        >
          USA
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("canada")}
        >
          Canada
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("france")}
        >
          France
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("argentina")}
        >
          Argentina
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("netherlands")}
        >
          Netherlands
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("japan")}
        >
          Japan
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("russia")}
        >
          Russia
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={() => handleShowModal("united kingdom")}
        >
          England
        </button>
      </div>
    </div>
  );
}
