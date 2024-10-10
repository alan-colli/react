import Header from "./components/Header";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    const listStorage = localStorage.getItem("list");
    if (listStorage) {
      setList(JSON.parse(listStorage));
    }
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleAttList = (task) => {
    if (edit) {
      setList((prevList) => {
        return prevList.map((_task) =>
          _task.Number === edit
            ? {
                ..._task,
                ...task,
              }
            : _task
        );
      });
      setEdit("");
      return;
    }

    setList((prevList) => [
      ...prevList,
      { ...task, Number: crypto.randomUUID() },
    ]);
  };

  const handleDeleteTask = (index) => {
    setList((prevState) => prevState.filter((_, i) => i !== index));
  };

  function handleEdit(id) {
    setEdit(id);
    handleModalOpen();
  }

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
              className="flex  mt-8 w-[90vw] justify-between items-center bg-gray-800 rounded-md text-white  "
            >
              <div className="space-y-8 text-base flex flex-row items-center ml-2n xl:text-2xl 2xl:text-4xl">
                <p>
                  {task.Activity}, {task.Week}
                </p>
              </div>
              <div className="flex flex-row mr-2 space-x-4">
                <button
                  className=" w-10 flex justify-center items-center bg-red-600 border-2 border-black hover:bg-red-300 text-white h-[3vh] 2xl:w-[3vw] 2xl:h-[5vh]"
                  onClick={() => handleDeleteTask(index)}
                >
                  DEL
                </button>
                <button
                  className="w-10 flex justify-center items-center bg-blue-600 border-2 hover:bg-blue-300 border-black text-white h-[3vh] 2xl:w-[3vw] 2xl:h-[5vh]"
                  onClick={() => handleEdit(task.Number)}
                >
                  EDIT
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
