import { useState } from "react";
import AddModal from "./components/AddModal";

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [people, setPeople] = useState([]);

  const handleAddModal = () => {
    setOpenAddModal(!openAddModal);
  };
  console.log(people);

  return (
    <div className="min-h-screen w-[100vw] bg-green-950 flex justify-start items-center flex-col">
      <header className="bg-black text-white w-[100vw] flex justify-center items-center h-[10vh]">
        <span>Header</span>
      </header>
      <button
        className="bg-black text-white w-12 h-8 rounded-2xl mt-4 "
        onClick={handleAddModal}
      >
        Add
      </button>
      <div className="bg-gray-100 w-[80vw] h-[65vh] mt-20 flex flex-col space-y-4 items-center">
        <p className="w-[80vw] flex justify-center">Peoples</p>
        {people.map((ppl) => (
          <div>
            <li
              key={ppl.id}
              className="bg-green-300 w-[70vw] flex  pl-4 rounded-md justify-between"
            >
              <div className="flex flex-col">
                <h2 className="font-bold">Name: {ppl.name}</h2>
                <p>Age: {ppl.age}</p>
              </div>
              <div className="pr-4 space-x-4 items-center justify-center flex">
                <button className="bg-blue-600 w-6 h-6 rounded-full">o</button>
                <button className="bg-red-600 w-6 h-6 rounded-full">a</button>
              </div>
            </li>
          </div>
        ))}
      </div>
      {openAddModal && (
        <AddModal handleAddModal={handleAddModal} setPeople={setPeople} />
      )}
    </div>
  );
}

export default App;
