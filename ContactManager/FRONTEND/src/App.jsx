import Header from "./components/Header";
import ModalToAdd from "./components/ModalToAdd";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalToEdit from "./components/ModalToEdit";

function App() {
  const [modalToAdd, setModalToOpen] = useState(false);
  const [modalToEdit, setModalToEdit] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState({});
  const [searchName, setSearchName] = useState("");

  const handleModalToAdd = () => {
    setModalToOpen(!modalToAdd);
  };
  const handleModalToEdit = () => {
    setModalToEdit(!modalToEdit);
  };

  //Passing the contact to edit to Modal
  const handleUpdateContact = async (id) => {
    console.log(id);
    setModalToEdit(true);
    try {
      const res = await axios.get(`http://localhost:7777/contacts/${id}`);
      const contactBeforeUpdate = res.data;
      setContactToEdit(contactBeforeUpdate);
    } catch (error) {
      console.error("Error fatching contact for update", error.message);
    }
  };

  //Saving updated contact
  const saveUpdatedContact = async (updatedContact) => {
    try {
      const res = await axios.put(
        `http://localhost:7777/contacts/${updatedContact.id}`,
        updatedContact
      );
      console.log("Contact updated succesfully: ", res.data);

      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
    } catch (error) {
      console.log("Cant updated the contact!", error.message);
    }
  };

  //Saving a contact
  const handleSaveContact = async (person) => {
    try {
      const res = await axios.post("http://localhost:7777/contacts", {
        first_name: person.first_name,
        last_name: person.last_name,
        phone_number: person.phone_number,
      });
      setContacts((prevContacts) => [...prevContacts, res.data]);
    } catch (error) {
      console.error("Error to save contact!", error.message);
    }
  };

  //Getting the list from backend
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

  //Deleting a contact
  const deleteContact = async (id) => {
    if (!id) {
      alert("ID is missing!");
      return;
    }
    try {
      const res = await axios.delete(`http://localhost:7777/contacts/${id}`);
      if (res.status === 200) {
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== id)
        );
        alert("Contact deleted!");
      }
    } catch (error) {
      alert("Couldn't delete!", error.message);
    }
  };

  const handleSearchContact = async () => {
    const name = searchName;
    if (!name) {
      alert("Please enter a name to search!");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:7777/contacts/search?first_name=${name}`
      );
      console.log(res.data);
      if (res.data.length === 0) {
        alert("No contacts found!");
        setContacts([]);
      } else {
        setContacts(res.data);
      }
    } catch (error) {
      alert("Error to search by the name!", error.message);
    }
  };

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
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button>
          <img
            src="./src/public/magnifying-glass (1).png"
            alt="magnifying glass image"
            className="w-4"
            onClick={handleSearchContact}
          />
        </button>
      </div>
      <ul className="h-[70vh] w-[90vw] flex flex-col justify-start items-center bg-gray-300 mt-4 rounded-md overflow-y-auto ">
        {contacts.map((contact) => {
          return (
            <li
              key={contact.id}
              className="flex w-[85vw] h-[20vh] bg-gray-600 text-white m-2 rounded-md p-2 items-center mb-8"
            >
              <div className="flex-1">
                <p className="font-bold text-xl">
                  {contact.first_name} {contact.last_name}
                </p>
                <p>{contact.phone_number}</p>
              </div>
              <div className="space-y-2 flex justify-center items-center flex-col">
                <button
                  className="bg-red-600 border-1 rounded-full w-8 h-8 flex justify-center items-center"
                  onClick={() => deleteContact(contact.id)}
                >
                  <img
                    src="./src/public/trash.png"
                    alt="trash icon"
                    className="w-6"
                  />
                </button>
                <button
                  className="bg-blue-600 border-1 rounded-full w-8 h-8 flex justify-center items-center"
                  onClick={() => handleUpdateContact(contact.id)}
                >
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

      {modalToAdd && (
        <ModalToAdd
          handleModalToAdd={handleModalToAdd}
          handleSaveContact={handleSaveContact}
        />
      )}
      {modalToEdit && (
        <ModalToEdit
          handleSaveContact={handleSaveContact}
          handleModalToEdit={handleModalToEdit}
          contactToEdit={contactToEdit}
          saveUpdatedContact={saveUpdatedContact}
        />
      )}
    </div>
  );
}
export default App;
