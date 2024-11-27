import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const getDataFromBackend = async () => {
      try {
        const res = await axios.get("http://localhost:3008/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Couldn't send data" + error.message);
      }
    };
    getDataFromBackend();
  }, []);

  const handleSaveProducts = async (product) => {
    console.log("Product to be saved:", product); // o que está sendo enviado
    if (product.id) {
      // editando um produto existente
      await editProduct(product);
    } else {
      // criando um novo produto
      try {
        const res = await axios.post("http://localhost:3008/products", {
          name: product.name,
          description: product.description,
          created_at: product.created_at || new Date().toISOString(),
        });
        setProducts((prevProducts) => [...prevProducts, res.data.product]);
      } catch (error) {
        console.error("Error saving product:", error.message);
        alert(
          "Error saving product: " + error.response?.data?.message ||
            error.message
        );
      }
    }
  };

  const editProduct = async (updateProduct) => {
    if (!updateProduct.id) {
      alert("Product ID is missing!");
      return;
    }
    console.log(updateProduct.id);
    try {
      const res = await axios.put(
        `http://localhost:3008/products/${updateProduct.id}`,
        updateProduct
      );
      if (res.status === 200) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updateProduct.id ? updateProduct : product
          )
        );
        alert("Product has been edited");
      }
    } catch (error) {
      alert("Couldn't edit!", error.message);
    }
  };

  const deleteProduct = async (id) => {
    if (!id) {
      alert("Product ID is missing!");
      return;
    }
    console.log("Deleting product with ID:", id);
    try {
      const res = await axios.delete(`http://localhost:3008/products/${id}`);
      if (res.status === 200) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        alert("Product has been deleted");
      }
    } catch (error) {
      alert("Couldn't delete", error.message);
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    handleModal();
  };

  const handleAddProduct = () => {
    setSelectedProduct({});
    handleModal();
  };

  return (
    <div className="flex flex-col w-max h-screen items-center bg-gray-100">
      <Header />
      <button
        className="bg-blue-800 text-white w-12 h-8 rounded-md flex items-center justify-center mt-6 hover:scale-110"
        onClick={handleAddProduct}
      >
        +
      </button>

      <ul className="flex justify-start items-center flex-col overflow-y-auto border-2 mt-12 bg-gray-400 rounded-md w-[40vw] h-[40vh]">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-gray-200 w-[30vw] m-1 pl-3 flex justify-between rounded-md"
          >
            <div className="flex-1">
              <h2 className="font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p>{new Date(product.created_at).toLocaleDateString()}</p>
            </div>
            <div className="flex flex-col justify-center items-center mr-2 space-y-2">
              <button
                className="bg-red-600 text-white hover:scale-110 rounded-md w-16"
                onClick={() => deleteProduct(product.id)}
              >
                DEL
              </button>
              <button
                className="bg-blue-600 text-white hover:scale-110 rounded-md w-16"
                onClick={() => handleEditClick(product)}
              >
                EDIT
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && (
        <Modal
          handleModal={handleModal}
          handleSaveProducts={handleSaveProducts}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
}

export default App;
