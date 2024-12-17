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
      <ul className="h-[70vh] w-[90vw] flex flex-col justify-start items-center bg-gray-300 mt-4 rounded-md overflow-y-auto">
        {contacts.map((contact) => {
          return (
            <li
              key={contact.id}
              className="flex w-[85vw] h-[20vh] bg-gray-600 text-white m-2 rounded-md p-2 items-center"
            >
              <div className="flex-1">
                <p className="font-bold text-xl">
                  {contact.first_name} {contact.last_name}
                </p>
                <p>{contact.phone_number}</p>
              </div>
              <div className="space-y-2 flex justify-center items-center flex-col">
                <button className="bg-red-600 border-1 rounded-full w-8 h-8 flex justify-center items-center">
                  <img
                    src="./src/public/trash.png"
                    alt="trash icon"
                    className="w-6"
                  />
                </button>
                <button className="bg-blue-600 border-1 rounded-full w-8 h-8 flex justify-center items-center">
                  <img
                    src="./src/public/botao-editar.png"
                    alt="edit icon"
                    className="w-6"
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {modalToAdd && <ModalToAdd handleModalToAdd={handleModalToAdd} />}
    </div>
  );
}
export default App;
