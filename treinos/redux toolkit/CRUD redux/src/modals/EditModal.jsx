import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePersonSlice } from "../redux/slices";

export default function editModal({ handleEditModal, update }) {
  const [updatedPeople, setUpdatedPeople] = useState({ name: "", age: 0 });

  useEffect(() => {
    if (update) {
      setUpdatedPeople(update);
    }
  }, [update]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePersonSlice(updatedPeople));
    handleEditModal();
  };

  return (
    <div className=" min-h-screen w-[100vw] flex flex-col fixed backdrop-blur-md bg-black/50 bg-opacity-25 items-center justify-start">
      <div className="w-[100vw] justify-end flex ">
        <button
          className=" flex justify-center items-center mr-4 mt-2 bg-red-600 text-white rounded-full h-8 w-8"
          onClick={handleEditModal}
        >
          X
        </button>
      </div>
      <form
        className="bg-gray-300 h-[40vh] w-[80vw] mt-50 rounded-md flex flex-col justify-start items-center space-y-12 pt-4"
        onSubmit={handleSubmit}
      >
        <p className="text-3xl text-bold">Update</p>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            value={updatedPeople.name}
            className="w-32 bg-white rounded-md pl-2 outline-none"
            onChange={(e) =>
              setUpdatedPeople({ ...updatedPeople, name: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <p>Age</p>
          <input
            type="number"
            name="age"
            id="age"
            value={updatedPeople.age}
            className="w-32 bg-white rounded-md pl-2 outline-none"
            onChange={(e) =>
              setUpdatedPeople({
                ...updatedPeople,
                age: Number(e.target.value),
              })
            }
          />
        </div>
        <button
          className="mb-4 w-24 h-8 bg-blue-600 rounded-md text-white"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
