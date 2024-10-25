import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";
import Users from "./components/Users";

function App() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);

  const handleShowModal = () => {
    setModal(true);
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8800/users");
      if (response.ok) {
        const data = await response.json();
        setUsers(data); // Atualiza o estado com os usuários
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-300 h-[100vh] w-[100vw] justify-start flex items-center flex-col">
      <Header />
      <button
        className="bg-blue-800 text-white flex justify-center items-center rounded-md w-[3vw] h-[3vh] p-4 mt-12"
        onClick={handleShowModal}
      >
        Add
      </button>
      <Users users={users} />
      {modal && <Modal setModal={setModal} addUser={addUser} />}
    </div>
  );
}

export default App;
