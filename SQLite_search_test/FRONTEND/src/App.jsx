import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const getDataFromBackend = async () => {
      try {
        const res = await axios.get("http://localhost:3007/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Couldnt send data" + error.message);
      }
    };
    getDataFromBackend();
    console.log(products);
  }, []);

  return (
    <div className="flex flex-col w-max h-screen items-center bg-gray-100">
      <Header />
      <button
        className="bg-blue-800 text-white w-12 h-8 rounded-md flex items-center justify-center mt-6 hover:scale-110"
        onClick={handleModal}
      >
        +
      </button>

      <ul className="flex justify-start items-center flex-col overflow-y-auto border-2 h-[55vh] mt-12 bg-gray-400 rounded-md">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-gray-200 w-[30vw]  m-1 pl-3 flex justify-between rounded-md"
          >
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.created_at}</p>
            </div>
          </li>
        ))}
      </ul>

      {showModal && <Modal handleModal={handleModal} />}
    </div>
  );
}

export default App;
