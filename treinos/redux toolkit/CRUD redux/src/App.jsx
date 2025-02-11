import AddModal from "./modals/AddModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePerson, updatePersonSlice } from "./redux/slices";
import EditModal from "./modals/EditModal";

export default function App() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [update, setUpdate] = useState({ name: "", age: 0 });

  const people = useSelector((state) => state.person.person);

  const dispatch = useDispatch();

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  const handleEditModal = () => {
    setEditModal(!editModal);
  };

  const deletePerson = (id) => {
    dispatch(removePerson(id));
  };

  const updatePerson = (ppl) => {
    setUpdate(ppl);
    handleEditModal();
    dispatch(updatePersonSlice(ppl));
  };
  console.log(update);
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
      <div className="h-[60vh] bg-green-800 w-[80vw] mt-16 rounded-md">
        <div className="space-y-2 m-2 ">
          {people.map((ppl) => (
            <div
              className="p-2 bg-green-950 rounded-md text-white flex justify-between"
              key={ppl.id}
            >
              <div>
                <p className="mr-2 font-bold text-2xl">{ppl.name}</p>
                <p>{ppl.age}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  className="bg-red-600 text-white rounded-4xl w-12"
                  onClick={() => deletePerson(ppl.id)}
                >
                  DEL
                </button>
                <button
                  className="bg-blue-600 text-white rounded-4xl w-12"
                  onClick={() => updatePerson(ppl)}
                >
                  UPD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {addModal && <AddModal handleAddModal={handleAddModal} />}
      {editModal && (
        <EditModal handleEditModal={handleEditModal} update={update} />
      )}
    </div>
  );
}
