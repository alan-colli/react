import { useState } from "react";

export default function EditModal({
  handleEditModal,
  update,
  setUpdate,
  setPeople,
  people,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople(
      people.map((ppl) =>
        ppl.id === update.id
          ? { ...ppl, name: update.name, age: update.age }
          : ppl
      )
    );

    handleEditModal();
  };

  return (
    <div className="justify-center items-center bg-black/50 bg-opacity-25 backdrop-blur-md flex fixed inset-0 w-[100vw] h-[100vh] flex-col">
      <div className="w-[80vw] h-[70vh] bg-green-950 flex flex-col items-center rounded-xl space-y-12">
        <div className="w-[80vw] items-end justify-center flex flex-col">
          <button
            className=" justify-end items-end mr-4 w-8 h-6 bg-red-600 text-white mt-4"
            onClick={handleEditModal}
          >
            X
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          action="submit"
          className="bg-green-800 w-[60vw] h-[50vh] flex flex-col items-center justify-content pt-16 space-y-12 rounded-2xl"
        >
          <div className="flex justify-center items-center flex-col text-2xl font-bold">
            <p>Name:</p>
            <input
              type="text"
              name="name"
              value={update?.name || ""}
              onChange={(e) => setUpdate({ ...update, name: e.target.value })}
              className="bg-gray-100 mt-4 w-[50vw] h-8 rounded-xl pl-2 outline-none"
            />
          </div>
          <div className="flex justify-center items-center flex-col text-2xl font-bold ">
            <p>Age:</p>
            <input
              name="age"
              type="number"
              value={update?.age || ""}
              onChange={(e) =>
                setUpdate({ ...update, age: parseInt(e.target.value) || "" })
              }
              className="bg-gray-100 mt-4 w-[10vw] h-8 rounded-xl pl-2 justify-center outline-none"
            />
          </div>
          <button
            className="bg-blue-600 text-white w-20 rounded-md mt-20"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
