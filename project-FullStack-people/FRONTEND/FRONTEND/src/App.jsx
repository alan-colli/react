import Header from "./Components/Header";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [pessoas, setPessoas] = useState([]);

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

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const addPeople = () => {
    handleModal();
  };
  return (
    <div className="flex flex-col items-center w-full h-[100vh] bg-gray-400">
      <div>
        <Header />
      </div>
      <button
        className="bg-gray-800 h-8 w-12 hover:scale-110 mt-4 rounded-md text-white"
        onClick={addPeople}
      >
        +
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
              <button className="bg-blue-600 rounded-md text-white w-8 mb-2 mt-2 flex items-center justify-center">
                E
              </button>
              <button className="bg-red-600 rounded-md text-white w-8 mb-2 mt-2 flex items-center justify-center">
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showModal && <Modal showModal={addPeople} handleModal={handleModal} />}
    </div>
  );
}

export default App;
