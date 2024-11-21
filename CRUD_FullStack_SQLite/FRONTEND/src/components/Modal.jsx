import { useState } from "react";

export default function Modal({
  handleModalOpen,
  handleSaveProducts,
  selectedProduct,
}) {
  const [product, setProduct] = useState(
    selectedProduct || {
      title: "",
      description: "",
      price: 0,
    }
  );

  const saveProduct = () => {
    handleSaveProducts({ ...product, id: selectedProduct?.id });
    handleModalOpen();
  };

  const cancelProduct = () => {
    setProduct({});
    handleModalOpen();
  };

  return (
    <div className="justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[100vw] h-[100vh]  flex-col ">
      <div className="h-[50vh] w-[30vw] bg-gray-800 flex justify-center items-center flex-col rounded-md space-y-10">
        <div className="flex justify-center items-center flex-col">
          <p className="text-3xl text-white">Name:</p>
          <input
            type="text"
            className="w-[20vw] rounded-md pl-2"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-3xl text-white">Description:</p>
          <input
            type="text"
            className="w-[20vw] rounded-md pl-2"
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-3xl text-white">Price:</p>
          <input
            type="number"
            className="w-14 rounded-md pl-2"
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
          />
        </div>
        <div className="justify-center items-center flex space-x-12">
          <button
            className="bg-green-500 w-[5vw] h-[4vh] rounded-lg hover:scale-110"
            onClick={saveProduct}
          >
            Submit
          </button>

          <button
            className="bg-red-600 w-[5vw] h-[4vh] rounded-lg hover:scale-110"
            onClick={handleModalOpen}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
