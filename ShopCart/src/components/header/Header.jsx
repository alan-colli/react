import { useSelector } from "react-redux";
import cartImage from "../../../public/grocery-store.png";
import CartModal from "../cartModal/CartModal";
import { useState, useMemo } from "react";
useSelector;

export default function Header() {
  const [cartModal, setcartModal] = useState(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const handleCartModal = () => {
    setcartModal(!cartModal);
  };

  const productsCount = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [products]);

  return (
    <div className="flex justify-between w-[100vw] h-[8vh] items-center p-4 bg-blue-300 sticky top-0">
      <div className="flex">
        <button>
          <img src={cartImage} alt="cart image" onClick={handleCartModal}></img>
        </button>
        <p className="flex items-end j">({productsCount})</p>
      </div>
      <p className="font-bold text-3xl">StoreCart</p>

      {cartModal && <CartModal handleCartModal={handleCartModal} />}
    </div>
  );
}
