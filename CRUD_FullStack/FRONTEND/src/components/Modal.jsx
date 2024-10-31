export default function Modal({ handleModal }) {
  return (
    <div className="justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh]  flex-col">
      <div className="bg-green-400 h-[50vh] w-[40vw] flex flex-col justify-start items-center space-y-4 pt-4 rounded-xl">
        <p className="text-3xl">Title:</p>

        <input type="text" className="rounded-md w-96 pl-4" />

        <p className="text-3xl">Description:</p>

        <input type="text" className="rounded-md w-96 pl-4" />

        <p className="text-3xl">Price:</p>

        <input type="number" className="rounded-md w-24 pl-4" />

        <div className="flex justify-center items-center space-x-32 pt-12">
          <button className="h-8 w-16 bg-blue-400 rounded-md border-2 border-black hover:scale-110">
            Submit
          </button>
          <button
            className="h-8 w-16 bg-red-400 rounded-md border-2 border-black hover:scale-110"
            onClick={handleModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
