export default function ButtonsSpace({ handleShowModal }) {
  return (
    <div className="bg-gray-100 h-[70vh] w-[80vw] rounded-b-md flex-col flex ">
      <div className="grid grid-cols-2 gap-4 w-full h-full  justify-items-center">
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          Brazil
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          Germany
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw]  hover:bg-green-300"
          onClick={handleShowModal}
        >
          USA
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          Canada
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          France
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          Argentina
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          Netherlands
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          Japan
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          Russia
        </button>
        <button
          className="bg-gray-300 border-2 border-black rounded-md m-4 w-[8vw] hover:bg-green-300"
          onClick={handleShowModal}
        >
          England
        </button>
      </div>
    </div>
  );
}
