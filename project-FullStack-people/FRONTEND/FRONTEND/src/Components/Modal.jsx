import { useState } from "react";

export default function Modal({
  handleModal,
  handleSavePeople,
  selectedPerson,
}) {
  const [inputPessoa, setInputPessoa] = useState({
    nome: "",
    cpf: "",
    idade: 0,
  });

  const savePeople = () => {
    handleSavePeople({ ...inputPessoa, id: selectedPerson });
    handleModal();
    console.log(inputPessoa);
  };
  return (
    <div className="justify-center items-center bg-black bg-opacity-25 backdrop-blur-md flex fixed inset-0 w-[100vw] h-[100vh] flex-col">
      <div className="w-[30vw] h-[60vh] bg-gray-400 flex flex-col items-center rounded-xl space-y-12">
        <div className="space-y-6 mt-8 flex flex-col justify-center items-center">
          <p className="text-2xl">Nome:</p>
          <input
            type="text"
            className="rounded-md pl-2 w-80"
            onChange={(e) =>
              setInputPessoa({ ...inputPessoa, nome: e.target.value })
            }
          />
          <p className="text-2xl">CPF:</p>
          <input
            type="text"
            className="rounded-md pl-2 w-32"
            onChange={(e) =>
              setInputPessoa({ ...inputPessoa, cpf: e.target.value })
            }
          />
          <p className="text-2xl">Idade:</p>
          <input
            type="number"
            className="rounded-md pl-2 w-12"
            onChange={(e) =>
              setInputPessoa({ ...inputPessoa, idade: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center items-center space-x-8">
          <button
            className="bg-blue-600 text-white hover:scale-110 w-12 h-8 rounded-md flex justify-center items-center"
            onClick={savePeople}
          >
            SUB
          </button>
          <button
            className="bg-red-600 text-white hover:scale-110 w-12 h-8 rounded-md flex justify-center items-center"
            onClick={handleModal}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
