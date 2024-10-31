import { useState, useEffect } from "react";
import Header from "./Header";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col items-center h-[100vh] w-full">
      <Header />
      <button
        className="h-6 w-12 bg-green-400 mt-6 border-2 flex justify-center items-center border-black rounded-md hover:scale-110"
        onClick={handleModal}
      >
        +
      </button>
      {showModal && <Modal handleModal={handleModal} />}
    </div>
  );
}

export default App;
