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
  const [notification, setNotification] = useState("");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(""); // Esconde a notificação após 3 segundos
    }, 3000);
  };

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
      showNotification("Contact updated!");

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
      showNotification("Contact created!");
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
      showNotification("ID is missing!");
      return;
    }
    try {
      const res = await axios.delete(`http://localhost:7777/contacts/${id}`);
      if (res.status === 200) {
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== id)
        );
        showNotification("Contact deleted!");
      }
    } catch (error) {
      showNotification(`Couldn't delete: ${error.message}`);
    }
  };

  //Searching contact
  const handleSearchContact = async () => {
    const name = searchName;
    if (!name) {
      const res = await axios.get("http://localhost:7777/contacts");
      setContacts(res.data);
    }

    try {
      const res = await axios.get(
        `http://localhost:7777/contacts/search?first_name=${name}`
      );

      if (res.data.length === 0) {
        showNotification("No contacts found!");
        setContacts(contacts);
      } else {
        setContacts(res.data);
        console.log(res.data);
      }
    } catch (error) {
      showNotification(`Error to search by the name!`, error.message);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center h-screen flex-col w-screen">
      <Header />

      {/* Add Contact Button */}
      <button
        className="flex justify-center items-center bg-blue-950 text-gray-100 w-12 h-12 rounded-full mt-6 text-2xl lg:text-8xl lg:w-24 lg:h-24 lg:pb-4"
        onClick={handleModalToAdd}
      >
        +
      </button>

      {/* Search Field */}
      <div className="bg-white rounded-md w-[90%] max-w-5xl flex justify-between items-center mt-4 p-2 lg:h-20">
        <input
          type="text"
          placeholder="Search by name..."
          className="flex-1 rounded-md pl-2  lg:text-4xl outline-none"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearchContact}>
          <img
            src="./src/public/magnifying-glass (1).png"
            alt="magnifying glass"
            className="w-6 lg:w-14"
          />
        </button>
      </div>

      {/* Contact List */}
      <ul className="h-[60vh] w-[90%] max-w-7xl flex flex-col justify-start items-center bg-gray-300 mt-4 rounded-md overflow-y-auto">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="flex w-[95%] max-w-7xl h-auto bg-gray-600 text-white my-2 rounded-md p-4 items-center"
          >
            <div className="flex-1">
              <p className="font-bold text-lg lg:text-5xl">
                {contact.first_name} {contact.last_name}
              </p>
              <p className="text-md lg:text-4xl">{contact.phone_number}</p>
            </div>
            <div className="space-x-2 flex justify-center items-center">
              <button
                className="bg-red-600 rounded-full w-8 h-8 lg:w-16 lg:h-16 flex justify-center items-center"
                onClick={() => deleteContact(contact.id)}
              >
                <img
                  src="./src/public/trash.png"
                  alt="trash icon"
                  className="w-6 lg:w-12 lg:p-2"
                />
              </button>
              <button
                className="bg-blue-600 rounded-full w-8 h-8 lg:w-16 lg:h-16 flex justify-center items-center"
                onClick={() => handleUpdateContact(contact.id)}
              >
                <img
                  src="./src/public/botao-editar.png"
                  alt="edit icon"
                  className="w-6 lg:w-12 lg:p-2"
                />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modals */}
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
      {/* Notiication */}
      {notification && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg z-50 
    sm:px-4 sm:py-2 sm:text-sm lg:px-8 lg:py-4 lg:text-3xl"
        >
          {notification}
        </div>
      )}
    </div>
  );
}

export default App;
