import { useState, useEffect } from "react";

export default function ModalToEdit({
  handleModalToEdit,
  contactToEdit,

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
      <main className="bg-gray-100 w-[80vw] h-[70vh] rounded-md flex flex-col items-center lg:w-[60vw] lg:h-[60vh]">
        <div className="w-[78vw] justify-end flex lg:w-[59vw]">
          <button
            className="bg-red-600 w-8 mt-2 rounded-full border-2  text-white border-white lg:w-16 lg:h-16 lg:text-6xl"
            onClick={handleModalToEdit}
          >
            X
          </button>
        </div>
        <div className="w-[70vw] h-[55vh] bg-gray-300 rounded-md flex justify-center items-center flex-col space-y-8 lg:w-[55vw] lg:h-[50vh]">
          <p className="lg:text-3xl ">First Name:</p>
          <input
            type="text"
            className="w-40 pl-2 lg:w-[12vw] lg:h-8 lg:text-2xl outline-none"
            value={editedContact?.first_name}
            onChange={(e) =>
              setEditedContact((prev) => ({
                ...prev,
                first_name: e.target.value,
              }))
            }
          />
          <p className="lg:text-3xl">Last Name:</p>
          <input
            type="text"
            className="w-40 pl-2 lg:w-[12vw] lg:h-8 lg:text-2xl outline-none"
            value={editedContact?.last_name}
            onChange={(e) =>
              setEditedContact((prev) => ({
                ...prev,
                last_name: e.target.value,
              }))
            }
          />
          <p className="lg:text-3xl">Phone Number:</p>
          <input
            type="text"
            className="w-40 pl-2 lg:w-[12vw] lg:h-8 lg:text-2xl outline-none"
            placeholder="XX-XXXX XXXX"
            value={editedContact?.phone_number}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");
              if (value.length <= 2) {
                value = value.replace(/(\d{2})(\d{0,4})/, "$1-$2");
              } else if (value.length <= 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "$1-$2 $3");
              } else {
                value = value.slice(0, 10);
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "$1-$2 $3");
              }
              setEditedContact((prev) => ({
                ...prev,
                phone_number: value,
              }));
            }}
          />
        </div>
        <button
          className="border-gray-200 border-2 bg-blue-600  w-20 rounded-full mt-4 text-gray-200 lg:w-[8vw] lg:h-16 lg:text-3xl"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </main>
    </div>
  );
}
