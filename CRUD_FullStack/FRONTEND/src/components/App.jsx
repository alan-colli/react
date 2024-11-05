import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSaveProducts = (product) => {
    setProducts((prevList) => [...prevList, product]);
    sendDataToBackEnd(product);
  };

  const sendDataToBackEnd = async (product) => {
    try {
      const res = await axios.post("http://localhost:3333/products", product);
      if (res.status === 200) {
        alert("Data has been sent");
      }
    } catch (error) {
      alert("Couldn't send data!" + error.message);
    }
  };

  useEffect(() => {
    const getDataFromBackend = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Can't get data!", error.message);
      }
    };

    getDataFromBackend();
  }, []);

  const deleteProduct = async (_id) => {
    console.log(_id);
    try {
      const res = await axios.delete(` http://localhost:3333/products/${_id} `);

      if (res.status === 200) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== _id)
        );
        alert("Product has been deleted!");
      }
    } catch (error) {
      alert("Couldn't delete! ", error.message);
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  console.log(products);

  return (
    <div className="flex flex-col items-center h-[100vh] w-full">
      <Header />
      <button
        className="h-6 w-12 bg-green-400 mt-6 border-2 flex justify-center items-center border-black rounded-md hover:scale-110"
        onClick={handleModal}
      >
        +
      </button>
      <ul className="w-[30vw] h-[60vh] border-2 mt-10 overflow-y-auto">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-2 border-b border-black flex justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p>{product.description}</p>
              <p className="font-semibold">Preço: R$ {product.price}</p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <button className="border-2 border-gray-300 rounded-md bg-blue-400 text-white">
                Edit
              </button>
              <button
                className="border-2 border-gray-300 rounded-md bg-red-600 text-white"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
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
