import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import Header from "./Components/Header";

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

  const handleModalClose = () => {
    setShowModal(false);
  };

  function handleEdit(id) {
    console.log(id);
    setEdit(id);
    handleModalOpen();
  }

  const handleAttList = (task) => {
    console.log(task);
    console.log(edit);

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

  const handleDelete = (index) => {
    setList((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-blue-800 h-[100vh] w-[100vw] justify-start flex flex-col items-center">
      <Header />
      <div className="w-[70vw] h-[3vh] flex justify-center items-center space-x-4">
        <button
          className="h-[2vh] w-[3vw] border-2 flex justify-center items-center bg-black text-white font-sans hover:border-purple-900  hover:text-purple-400"
          onClick={handleModalOpen}
        >
          Add
        </button>
      </div>
      <div className="bg-purple-900 w-[70vw] h-[80vh] flex items-start justify-start rounded-md p-8">
        {list.length === 0 ? (
          <p className="text-white flex justify-center items-center w-full h-full">
            None activity has been added!
          </p>
        ) : (
          <div className="flex flex-wrap  ">
            {list.map((task, index) => (
              <div
                key={task.Number}
                className="flex flex-col justify-center items-center"
              >
                <div className="ml-4 h-[28vh] w-[12.5vw] bg-gray-300 flex flex-col justify-center items-center rounded-md  space-y-8 ">
                  <p>Activity: {task.Activity}</p>
                  <p>Date: {task.Date}</p>
                  <div className="mt-20 justify-between space-x-4">
                    <button
                      className="border-2 border-purple-700 rounded-md w-[3vw] text-purple-900 hover:bg-blue-600 hover:text-white"
                      onClick={() => handleEdit(task.Number)}
                    >
                      Edit
                    </button>
                    <button
                      className="border-2 border-purple-700 rounded-md w-[3vw] text-purple-900 hover:bg-red-600 hover:text-white"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {showModal && (
          <Modal
            handleModalClose={handleModalClose}
            handleAttList={handleAttList}
            handleEdit={handleEdit}
          />
        )}
      </div>
    </div>
  );
}
