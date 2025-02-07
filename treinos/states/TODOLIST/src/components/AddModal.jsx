import { useState } from "react";

export default function AddModal({ handleAddModal, setPeople }) {
  const [values, setValues] = useState({
    id: crypto.randomUUID(),
    name: "",
    age: "",
  });

  const handleSubmit = () => {
    setPeople((prevPeople) => [...prevPeople, values]);
    handleAddModal();
  };

  return (
    <div className="justify-center items-center bg-black/50 bg-opacity-25 backdrop-blur-md flex fixed inset-0 w-[100vw] h-[100vh] flex-col">
      <div className="w-[80vw] h-[70vh] bg-green-950 flex flex-col items-center rounded-xl space-y-12">
        <div className="w-[80vw] items-end justify-center flex flex-col">
          <button
            className=" justify-end items-end mr-4 w-8 h-6 bg-red-600 text-white mt-4"
            onClick={handleAddModal}
          >
            X
          </button>
        </div>
        <form
          action="submit"
          className="bg-green-800 w-[60vw] h-[50vh] flex flex-col items-center justify-content pt-16 space-y-12 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center flex-col text-2xl font-bold">
            <p>Name:</p>
            <input
              type="text"
              name="name"
              className="bg-gray-100 mt-4 w-[50vw] h-8 rounded-xl pl-2 outline-none"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="flex justify-center items-center flex-col text-2xl font-bold ">
            <p>Age:</p>
            <input
              name="age"
              type="number"
              className="bg-gray-100 mt-4 w-[10vw] h-8 rounded-xl pl-2 justify-center outline-none"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <button
            className="bg-blue-600 text-white w-20 rounded-md mt-20"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
