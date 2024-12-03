import Header from "./Components/Header";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [pessoas, setPessoas] = useState([]);
  const [selectPerson, setSelectPerson] = useState(null);

  useEffect(() => {
    const getDataFromBackend = async () => {
      try {
        const res = await axios.get("http://localhost:3333/pessoas");
        setPessoas(res.data);
      } catch (error) {
        console.error("Não foi possível captar as pessoas");
      }
    };
    getDataFromBackend();
  }, []);

  const handleSavePeople = async (people) => {
    console.log("People to be saved or edited:", people); // Debug
    if (people.id) {
      await editPerson(people);
    } else {
      try {
        const res = await axios.post("http://localhost:3333/pessoas", {
          nome: people.nome,
          cpf: people.cpf,
          idade: people.idade,
        });
        setPessoas((prevPessoas) => [...prevPessoas, res.data]); // Corrigido res.data.people
        alert("Pessoa salva com sucesso!");
      } catch (error) {
        console.error("Erro ao salvar pessoa", error.message);
        alert("Erro ao salvar pessoa!");
      }
    }
  };

  const editPerson = async (selectPerson) => {
    console.log(selectPerson.id);
    if (!selectPerson.id) {
      alert("People ID missing!");
      return;
    }

    try {
      const res = await axios.put(
        `http://localhost:3333/pessoas/${selectPerson.id}`,
        selectPerson
      );
      if (res.status === 200) {
        setPessoas((prevPeople) =>
          prevPeople.map((people) =>
            people.id === selectPerson.id ? selectPerson : people
          )
        );
        alert("Produt has been edited");
      }
    } catch (error) {
      alert("Couldnt edited", error.message);
    }
  };

  const deletePerson = async (id) => {
    if (!id) {
      alert("Product ID is missing");
      return;
    }
    console.log("Deleting people with ID: ", id);
    try {
      const res = await axios.delete(`http://localhost:3333/pessoas/${id}`);
      if (res.status === 200) {
        setPessoas((prevPessoas) =>
          prevPessoas.filter((pessoa) => pessoa.id !== id)
        );
        alert("People has been deleted");
      }
    } catch (error) {
      alert("Couldnt delete", error.message);
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleEditClick = (pessoa) => {
    console.log(pessoa);
    console.log(pessoa.id);
    setSelectPerson(pessoa);
    handleModal();
  };
  const handleAddPeople = () => {
    setSelectPerson({});
    handleModal();
  };
  return (
    <div className="flex flex-col items-center w-full h-[100vh] bg-gray-400">
      <div>
        <Header />
      </div>
      <button
        className="bg-gray-800 h-8 w-12 hover:scale-110 mt-4 rounded-md text-white"
        onClick={handleAddPeople}
      >
        Add +
      </button>
      <ul className="flex justify-start items-center flex-col overflow-y-auto border-2 mt-12 bg-gray-400 rounded-md w-[40vw] h-[50vh]">
        {pessoas.map((pessoa) => (
          <li
            key={pessoa.id}
            className=" bg-gray-200 w-[35vw] m-1 pl-4 flex space-x-10 justify-between pr-4 rounded-md items-center"
          >
            <h2>
              {pessoa.nome}, {pessoa.idade}
            </h2>

            <div className="flex space-x-4  items-center">
              <p>CPF: {pessoa.cpf}</p>
              <button
                className="bg-blue-600 rounded-md text-white w-8 mb-2 mt-2 flex items-center justify-center"
                onClick={() => handleEditClick(pessoa)}
              >
                E
              </button>
              <button
                className="bg-red-600 rounded-md text-white w-8 mb-2 mt-2 flex items-center justify-center"
                onClick={() => deletePerson(pessoa.id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal
          handleModal={handleModal}
          handleSavePeople={handleSavePeople}
          selectedPerson={selectPerson}
        />
      )}
    </div>
  );
}

export default App;
