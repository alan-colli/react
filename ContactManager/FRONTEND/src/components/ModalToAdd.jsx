import { useState } from "react";

export default function ModalToAdd({ handleModalToAdd, handleSaveContact }) {
  const [addContact, setAddContact] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  const handleCloseModal = () => {
    handleModalToAdd();
  };

  const saveContact = () => {
    handleSaveContact(addContact);
    handleCloseModal();
  };

  return (
    <div className="justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh] flex-col">
      <main className="bg-gray-100 w-[80vw] h-[70vh] rounded-md flex flex-col items-center lg:w-[60vw] lg:h-[60vh]">
        <div className="w-[78vw] justify-end flex lg:w-[59vw]">
          <button
            className="bg-red-600 w-8 mt-2 rounded-full border-2  text-white border-white lg:w-24 lg:h-24 lg:text-6xl"
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
        <div className="w-[70vw] h-[55vh] bg-gray-300 rounded-md flex justify-center items-center flex-col space-y-8 lg:w-[55vw] lg:h-[50vh]">
          <p className="lg:text-8xl">First Name:</p>
          <input
            type="text"
            className="w-40 pl-2 lg:w-[12vw] lg:h-16 lg:text-5xl"
            value={addContact.first_name}
            onChange={(e) =>
              setAddContact({ ...addContact, first_name: e.target.value })
            }
          />
          <p className="lg:text-8xl">Last Name:</p>
          <input
            type="text"
            className="w-40 pl-2 lg:w-[12vw] lg:h-16 lg:text-5xl"
            value={addContact.last_name}
            onChange={(e) =>
              setAddContact({ ...addContact, last_name: e.target.value })
            }
          />
          <p className="lg:text-8xl">Phone Number:</p>
          <input
            type="text"
            className="w-40 pl-2 lg:w-[12vw] lg:h-16 lg:text-5xl"
            placeholder="XX-XXXXXXXXX"
            value={addContact.phone_number}
            onChange={(e) =>
              setAddContact({ ...addContact, phone_number: e.target.value })
            }
          />
        </div>
        <button
          className="border-gray-200 border-2 bg-blue-600  w-20 rounded-full mt-4 text-gray-200 lg:w-[8vw] lg:h-24 lg:text-6xl"
          onClick={saveContact}
        >
          SUBMIT
        </button>
      </main>
    </div>
  );
}
