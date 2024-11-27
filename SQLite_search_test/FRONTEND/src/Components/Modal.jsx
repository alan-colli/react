import { useState } from "react";

export default function Modal({
  handleModal,
  selectedProduct,
  handleSaveProducts,
}) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    created_at: "",
  });

  const saveProduct = () => {
    handleSaveProducts({ ...product, id: selectedProduct.id }); // "Spread" o produto e passa o id caso tenha que ser editado
    handleModal();
  };

  return (
    <div className="justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh] flex-col">
      <div className="flex flex-col justify-center items-center bg-gray-100 rounded-md w-[50vw] h-[80vh] space-y-12">
        <div className="flex justify-center items-center flex-col space-y-6">
          <p className="text-3xl">Name:</p>
          <input
            type="text"
            className="w-96 border-2 border-black rounded-md pl-2"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <p className="text-3xl">Description:</p>
          <input
            type="text"
            className="w-96 border-2 border-black rounded-md pl-2"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
          <p className="text-3xl">Created at:</p>
          <input
            type="date"
            className="w-96 border-2 border-black rounded-md"
            value={product.created_at}
            onChange={(e) =>
              setProduct({ ...product, created_at: e.target.value })
            }
          />
        </div>
        <div className="space-x-12">
          <button
            onClick={saveProduct}
            className="bg-blue-600 w-12 h-8 rounded-md hover:scale-110"
          >
            SUB
          </button>
          <button
            onClick={handleModal}
            className="bg-red-600 w-12 h-8 rounded-md hover:scale-110"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
