import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="bg-gray-700 h-[100vh] w-full flex flex-col items-center">
      <Header />
      <button
        className="bg-black text-white flex justify-center h-[4vh] w-[4vw] mt-4 text-3xl items-center rounded-xl"
        onClick={handleModalOpen}
      >
        +
      </button>
      {showModal && <Modal handleModalOpen={handleModalOpen} />}
    </div>
  );
}

export default App;
