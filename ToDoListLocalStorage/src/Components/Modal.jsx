import { useState } from "react";

export default function Modal({ showModal, handleModalClose, handleAttList }) {
  const [task, setTask] = useState({});

  if (!showModal) return null;

  const handleSaveTask = () => {
    handleAttList(task);
    handleModalClose();
  };

  const handleCancelTask = () => {
    setTask({});
    handleModalClose();
  };

  return (
    <div className=" justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh]">
      <div className="w-[30vw] h-[35vh] ">
        <div className="bg-gray-100 p2 rounded h-[35vh]">
          <div className="flex justify-end p-4 w-[30vw] ">
            <button
              className="justify-center items-center flex bg-red-600 text-gray-300 border-2 border-black w-6 h-6 hover:bg-gray-100 hover:text-red-600"
              onClick={handleCancelTask}
            >
              X
            </button>
          </div>
          <div className="flex-col justify-center items-center flex space-y-8 pl-4">
            <p>Type your activity: </p>
            <input
              label="Activity: "
              type="text"
              onChange={(e) => setTask({ ...task, Activity: e.target.value })}
            />
            <p>Enter the Due Date: </p>
            <input
              label="Date: "
              type="date"
              onChange={(e) => setTask({ ...task, Date: e.target.value })}
            />
          </div>
          <div className="justify-center items-center flex pt-8">
            <button
              className="justify-center items-center flex bg-blue-600 text-gray-100 border-2 border-black w-16 h-6 hover:bg-gray-100 hover:text-blue-600"
              onClick={handleSaveTask}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
