import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSaveProducts = (product) => {
    setProducts((prevList) => [...prevList, product]);
    sendDataToBackEnd();
  };

  const sendDataToBackEnd = async () => {
    try {
      const res = await axios.post("http://localhost:3333/products", {
        products,
      });
    } catch (error) {
      alert("Couldnt send data!" + error.message);
    }
  };

  useEffect(() => {
    axios
      .get("products")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert("Products not found!" + error);
      });
  });

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col items-center h-[100vh] w-full">
      <Header />
      <button
        className="h-6 w-12 bg-green-400 mt-6 border-2 flex justify-center items-center border-black rounded-md hover:scale-110"
        onClick={handleModal}
      >
        +
      </button>

      {showModal && (
        <Modal
          handleModal={handleModal}
          handleSaveProducts={handleSaveProducts}
        />
      )}
    </div>
  );
}

export default App;
