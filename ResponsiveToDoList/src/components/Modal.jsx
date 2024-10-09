import { useState } from "react";

export default function Modal({ setShowModal, handleAttList }) {
  const [task, setTask] = useState({});

  const handleCancelTask = () => {
    setTask({});
    setShowModal(false);
  };

  const saveTask = () => {
    handleAttList(task);
    setShowModal(false);
  };
  return (
    <div className=" justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh]  flex-col">
      <div className="flex flex-col justify-start items-center bg-gray-100 w-[80vw] h-[70vh] pt-10 text-xl space-y-24 rounded-md">
        <div className="bg-blue-300 h-[20vh] w-[70vw] rounded-xl flex flex-col justify-center items-center space-y-4">
          <p className="text-xl md:text-3xl xl:text-7xl">Type a task!</p>
          <p className="text-sm md:text-xl xl:text-3xl">
            Type the name and a due date
          </p>
        </div>
        <input
          className="w-[50vw] p-2 border-2 border-black rounded-md"
          type="text"
          placeholder="Task"
          onChange={(e) => setTask({ ...task, Activity: e.target.value })}
        />
        <input
          className="w-[50vw] p-2 border-2 border-black rounded-md"
          type="week"
          onChange={(e) => setTask({ ...task, Week: e.target.value })}
        />
      </div>
      <div className="flex flex-row">
        <button
          className="bg-blue-600 m-2 text-white w-[15vw] h-[3vh] border-2 border-black hover:bg-blue-700 hover:text-white md:text-xl xl:text-4xl xl:h-[5vh] flex flex-col justify-center items-center rounded-md"
          onClick={saveTask}
        >
          ENTER
        </button>
        <button
          onClick={handleCancelTask}
          className="bg-red-600 m-2 text-white w-[15vw] h-[3vh] border-2 border-black hover:bg-red-300 hover:text-white md:text-xl xl:text-4xl xl:h-[5vh] flex flex-col justify-center items-center rounded-md"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
