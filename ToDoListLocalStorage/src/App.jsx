import { useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Modal from "./Components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAttList = (task) => {
    setList([...list, task]);
    console.log(list);
  };

  return (
    <div className="bg-blue-600 h-[100vh] w-[100vw] justify-start flex flex-col items-center">
      <Header></Header>
      <div className="w-[70vw] h-[3vh] flex justify-center items-center space-x-4">
        <button
          className="h-[2vh] w-[3vw] border-2 flex justify-center items-center bg-black text-white font-sans hover:border-red-600 hover:text-red-600"
          onClick={handleModalOpen}
        >
          Add
        </button>
        <button className="h-[2vh] w-[3vw] border-2 flex justify-center items-center bg-black text-white font-sans hover:border-red-600 hover:text-red-600">
          Edit
        </button>
      </div>
      <div className="bg-red-300 w-[70vw] h-[80vh] flex items-start justify-start rounded-md p-8">
        <Card />
      </div>
      <Modal
        showModal={showModal}
        handleModalClose={handleModalClose}
        handleAttList={handleAttList}
      />
    </div>
  );
}
