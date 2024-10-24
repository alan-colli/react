import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [modal, setModal] = useState(false);

  const handleShowModal = () => {
    setModal(true);
  };

  return (
    <div className="bg-gray-300 h-[100vh] w-[100vw] justify-start flex items-center flex-col">
      <Header />
      <button
        className="bg-blue-800 text-white flex justify-center items-center rounded-md w-[3vw] h-[3vh] p-4 mt-12"
        onClick={handleShowModal}
      >
        Add
      </button>
      <Users />
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
