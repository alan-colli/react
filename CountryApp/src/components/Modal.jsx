export default function Modal({ handleCloseModal }) {
  return (
    <div className=" justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh] ">
      <div className="flex flex-col justify-center items-center bg-white h-[80vh] w-[80vw] rounded-md">
        <div>ola</div>
        <button
          className="bg-red-600 text-white border-2 w-[5vw] border-black hover:bg-red-900"
          onClick={handleCloseModal}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
