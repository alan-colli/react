import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getDataFromBackend = async () => {
      try {
        const response = await axios.get("http://localhost:3002/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Couldn't send data!" + error.message);
      }
    };
    getDataFromBackend();
  }, []);

  const handleSaveProducts = async (product) => {
    if (product.id) {
      await editProduct(product);
    } else {
      const res = await axios.post("http://localhost:3002/products", product);
      setProducts((prevProducts) => [...prevProducts, res.data]);
    }
  };

  const editProduct = async (updateProduct) => {
    try {
      const res = await axios.put(
        `http://localhost:3002/products/${updateProduct.id}`,
        updateProduct
      );

      if (res.status === 200) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updateProduct.id ? updateProduct : product
          )
        );
      }
    } catch (error) {
      alert("Couldnt edited!", error.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3002/products/${id}`);
      console.log("Função delete product", id);

      if (res.status === 200) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        alert("Product has been deleted!");
      }
    } catch (error) {
      alert("Couldn't delete!", error.message);
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    handleModalOpen();
  };

  const handleModalOpen = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="bg-gray-700 h-[100vh] w-full flex flex-col items-center ">
      <Header />

      <button
        className="bg-black text-white flex justify-center h-[4vh] w-[4vw] mt-4 text-3xl items-center rounded-xl"
        onClick={handleModalOpen}
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
              <p>Price: {product.price}</p>
            </div>
            <div className="mr-4 flex flex-col justify-center space-y-2 ">
              <button
                className="bg-blue-400 text-white rounded-md w-16 hover:scale-110"
                onClick={() => handleEditClick(product)}
              >
                EDIT
              </button>
              <button
                className="bg-red-600 text-white rounded-md w-16 hover:scale-110 "
                onClick={() => deleteProduct(product.id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && (
        <Modal
          handleModalOpen={handleModalOpen}
          handleSaveProducts={handleSaveProducts}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
}

export default App;
