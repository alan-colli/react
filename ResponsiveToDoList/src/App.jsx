import Header from "./components/Header";
import { useState } from "react";
import Modal from "./components/Modal";

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
    console.log(list);
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
      <div></div>
      {showModal && (
        <Modal setShowModal={setShowModal} handleAttList={handleAttList} />
      )}
    </div>
  );
}
