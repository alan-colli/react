import { useState } from "react";

export default function Modal({ setModal, addUser }) {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleCancelModal = () => {
    setUser({
      name: "",
      age: "",
      email: "",
    });
    setModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveUser = async () => {
    try {
      const response = await fetch("http://localhost:8800/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const newUser = await response.json();
        addUser(newUser);
        handleCancelModal();
      } else {
        console.error("Failed to save user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh]  flex-col">
      <div className="flex flex-col items-center justify-center bg-gray-500 w-[40vw] h-[60vh] rounded-xl ">
        <p className="text-white">Name</p>
        <input
          type="text"
          className="m-2 h-8 rounded-md w-[40vh] border-2 border-black p-2 text-black"
          onChange={handleChange}
          value={user.name}
        />
        <p className="text-white">Age</p>
        <input
          type="number"
          className="m-2 h-8 rounded-md w-[40vh] border-2 border-black p-2"
          onChange={handleChange}
          value={user.age}
        />
        <p className="text-white">Email</p>
        <input
          type="email"
          className="m-2 h-8 rounded-md w-[40vh] border-2 border-black p-2"
          onChange={handleChange}
          value={user.email}
        />
        <div className="space-x-12 mt-20">
          <button
            className="bg-blue-600 text-white w-16 h-8 rounded-md"
            onClick={handleSaveUser}
          >
            Submit
          </button>
          <button
            onClick={handleCancelModal}
            className="bg-red-600 text-white w-16 h-8 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
