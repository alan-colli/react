import AddModal from "./modals/AddModal";
import { useState } from "react";

export default function App() {
  const [addModal, setAddModal] = useState(false);

  const handleAddModal = () => {
    setAddModal(!addModal);
  };
  return (
    <div className="min-h-screen w-[100vw] flex flex-col items-center bg-black justify-start">
      <header className="bg-green-800  h-[10vh] w-[100vw] flex justify-center items-center text-4xl">
        header
      </header>
      <button
        className="bg-green-800  w-8 h-8 rounded-full mt-8 text-2xl justify-center items-center"
        onClick={handleAddModal}
      >
        +
      </button>
      <div className="h-[60vh] bg-green-800 w-[80vw] mt-16 rounded-md"></div>
      {addModal && <AddModal handleAddModal={handleAddModal} />}
    </div>
  );
}
