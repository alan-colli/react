import Header from "./components/Header";
import ModalToAdd from "./components/ModalToAdd";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [modalToAdd, setModalToOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [searchName, setSearchName] = useState("");

  const handleModalToAdd = () => {
    setModalToOpen(!modalToAdd);
  };

  useEffect(() => {
    const getDataFromBackend = async () => {
      try {
        const res = await axios.get("http://localhost:7777/contacts");
        setContacts(res.data);
      } catch (error) {
        console.error("Couldnt got data!" + error.message);
      }
    };
    getDataFromBackend();
  }, []);

  return (
    <div className="bg-gray-100  flex items-center h-[100vh] flex-col w-[100vw]">
      <Header />
      <button
        className="flex justify-center items-center bg-blue-950 text-gray-100 w-8 h-8 rounded-full  mt-6 text-3xl"
        onClick={handleModalToAdd}
      >
        +
      </button>
      <div className="bg-white rounded-md w-52 justify-between flex items-center mt-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="rounded-md pl-2"
        />
        <button>
          <img
            src="./src/public/magnifying-glass (1).png"
            alt="magnifying glass image"
            className="w-4"
          />
        </button>
      </div>
      {contacts.map((contact) => {
        <li key={contact.id} className="flex w-[40vw] h-[50v]">
          <div>
            <p>
              {contact.first_name}
              {contact.last_name}
            </p>
            <p>{contact.phone_number}</p>
          </div>
        </li>;
      })}

      {modalToAdd && <ModalToAdd handleModalToAdd={handleModalToAdd} />}
    </div>
  );
}
export default App;
