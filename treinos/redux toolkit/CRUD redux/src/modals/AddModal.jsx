export default function AddModal({ handleAddModal }) {
  return (
    <div className=" min-h-screen w-[100vw] flex flex-col fixed backdrop-blur-md bg-black/50 bg-opacity-25 items-center justify-start">
      <div className="w-[100vw] justify-end flex ">
        <button
          onClick={handleAddModal}
          className=" flex justify-center items-center mr-4 mt-2 bg-red-600 text-white rounded-full h-8 w-8"
        >
          X
        </button>
      </div>
      <form
        action="submit"
        className="bg-gray-300 h-[40vh] w-[80vw] mt-50 rounded-md flex flex-col justify-start items-center space-y-12 pt-4"
      >
        <p className="text-3xl text-bold">Form</p>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            className="w-32 bg-white rounded-md pl-2 outline-none"
          />
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <p>Birth</p>
          <input
            type="date"
            name="birth"
            id="birth"
            className="w-32 bg-white rounded-md pl-2 outline-none"
          />
        </div>
        <button className="mb-4 w-24 h-8 bg-blue-600 rounded-md text-white">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
