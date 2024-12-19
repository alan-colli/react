import { useState, useEffect } from "react";

export default function ModalToEdit({
  handleModalToEdit,
  contactToEdit,
  handleSaveContact,
  saveUpdatedContact,
}) {
  const [editedContact, setEditedContact] = useState(contactToEdit);

  useEffect(() => {
    setEditedContact(contactToEdit);
  }, [contactToEdit]);

  const handleSubmit = () => {
    saveUpdatedContact(editedContact);
    handleModalToEdit();
  };
  return (
    <div className="justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh] flex-col">
      <main className="bg-gray-100 w-[80vw] h-[70vh] rounded-md flex flex-col items-center">
        <div className="w-[78vw] justify-end flex ">
          <button
            className="bg-red-600 w-8 mt-2 rounded-full border-2  text-white border-white"
            onClick={handleModalToEdit}
          >
            X
          </button>
        </div>
        <div className="w-[70vw] h-[55vh] bg-gray-300 rounded-md flex justify-center items-center flex-col space-y-8">
          <p>First Name:</p>
          <input
            type="text"
            className="w-40 pl-2"
            value={editedContact?.first_name}
            onChange={(e) =>
              setEditedContact((prev) => ({
                ...prev,
                first_name: e.target.value,
              }))
            }
          />
          <p>Last Name:</p>
          <input
            type="text"
            className="w-40 pl-2"
            value={editedContact?.last_name}
            onChange={(e) =>
              setEditedContact((prev) => ({
                ...prev,
                last_name: e.target.value,
              }))
            }
          />
          <p>Phone Number:</p>
          <input
            type="text"
            className="w-40 placeholder:text-center pl-2"
            placeholder="XX-XXXXXXXXX"
            value={editedContact?.phone_number}
            onChange={(e) =>
              setEditedContact((prev) => ({
                ...prev,
                phone_number: e.target.value,
              }))
            }
          />
        </div>
        <button
          className="border-gray-200 border-2 bg-blue-600  w-20 rounded-full mt-4 text-gray-200"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </main>
    </div>
  );
}
