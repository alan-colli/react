import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../redux/slices.js";

export default function AddModal({ handleAddModal }) {
  const [values, setValues] = useState({ name: "", age: 0 });
  const dispatch = useDispatch();

  console.log(values);

  const handleAddPerson = (e) => {
    e.preventDefault();
    dispatch(addPerson(values));
    setValues({ name: "", age: 0 });
    handleAddModal();
  };

  return (
    <div className=" min-h-screen w-[100vw] flex flex-col fixed backdrop-blur-md bg-black/50 bg-opacity-25 items-center justify-start">
      <div className="w-[100vw] justify-end flex ">
        <button
          onClick={handleAddModal}
          className=" flex justify-center items-center mr-4 mt-2 bg-red-600 text-white rounded-full h-8 w-8"
        >
          X
        </button>
      </div>
      <form className="bg-gray-300 h-[40vh] w-[80vw] mt-50 rounded-md flex flex-col justify-start items-center space-y-12 pt-4">
        <p className="text-3xl text-bold">Form</p>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            className="w-32 bg-white rounded-md pl-2 outline-none"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <p>Age</p>
          <input
            type="number"
            name="birth"
            id="birth"
            className="w-32 bg-white rounded-md pl-2 outline-none"
            onChange={(e) =>
              setValues({ ...values, age: Number(e.target.value) })
            }
          />
        </div>
        <button
          className="mb-4 w-24 h-8 bg-blue-600 rounded-md text-white"
          onClick={(e) => handleAddPerson(e)}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
