import cartImage from "../../../public/grocery-store.png";
import CartModal from "../cartModal/CartModal";
import { useState } from "react";

export default function Header() {
  const [cartModal, setcartModal] = useState(false);

  const handleCartModal = () => {
    setcartModal(!cartModal);
  };

  return (
    <div className="flex justify-between w-full h-[8vh] items-center p-4 bg-blue-300">
      <button>
        <img src={cartImage} alt="cart image" onClick={handleCartModal} />
      </button>
      <p className="font-bold text-3xl">StoreCart</p>

      {cartModal && <CartModal handleCartModal={handleCartModal} />}
    </div>
  );
}
