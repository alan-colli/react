import Header from "./components/Header";
import { useState } from "react";
import Modal from "./components/Modal";
import editIcon from "./components/edit.png";
import trashIcon from "./components/trash-can.png";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleAttList = (task) => {
    setList((prevList) => [
      ...prevList,
      { ...task, Number: crypto.randomUUID() },
    ]);
  };

  const handleDeleteTask = (index) => {
    setList((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-start">
      <Header />
      <button
        className="bg-blue-400 m-2  w-[12vw] h-[3vh] border-2 border-black hover:bg-blue-700 hover:text-white md:text-xl xl:text-4xl xl:h-[5vh]"
        onClick={handleModalOpen}
      >
        Add
      </button>
      <div className="w-[90vw] h-[72vh] bg-gray-300 rounded-md flex flex-col space-y-8">
        {list.length === 0 ? (
          <div className="w-full h-full flex flex-col justify-center">
            <p className="flex justify-center">
              None activity have been added!
            </p>
          </div>
        ) : (
          list.map((task, index) => (
            <div
              key={task.Number}
              className="flex  mt-8 w-[90vw] justify-between items-center "
            >
              <div className="space-y-8 text-base flex flex-row items-center ml-2 ">
                <p>
                  {task.Activity}, {task.Week}
                </p>
              </div>
              <div className="flex flex-row mr-2 space-x-4">
                <button
                  className=" w-6 flex justify-center items-center "
                  onClick={() => handleDeleteTask(index)}
                >
                  <img src={trashIcon} />
                </button>
                <button>
                  <img src={editIcon} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} handleAttList={handleAttList} />
      )}
    </div>
  );
}
