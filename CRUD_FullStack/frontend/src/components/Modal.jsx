export default function Modal({ setModal }) {
  const handleCanceltask = () => {
    setModal(false);
  };

  return (
    <div className=" justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh]  flex-col">
      <div className="flex flex-col items-center justify-center bg-gray-500 w-[40vw] h-[60vh] rounded-xl ">
        <p>Name</p>
        <input
          type="text"
          className="m-2 h-8 rounded-md w-[40vh] border-2 border-black p-2"
        />
        <p>Age</p>
        <input
          type="number"
          className="m-2 h-8 rounded-md w-[40vh] border-2 border-black p-2"
        />
        <p>Email</p>
        <input
          type="email"
          className="m-2 h-8 rounded-md w-[40vh] border-2 border-black p-2"
        />
        <div className="space-x-12 mt-20">
          <button className="bg-blue-600 text-white w-16 h-8 rounded-md">
            Submit
          </button>
          <button
            onClick={handleCanceltask}
            className="bg-red-600 text-white w-16 h-8 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
