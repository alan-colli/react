import { useSelector } from "react-redux";
import cartImage from "../../../public/grocery-store.png";
import CartModal from "../cartModal/CartModal";
import { useState } from "react";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
useSelector;

export default function Header() {
  const [cartModal, setCartModal] = useState(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const handleCartModal = () => {
    setCartModal(!cartModal);
  };

  const productsCount = useSelector(selectProductsCount);

  return (
    <div className="flex justify-between w-[100vw] h-[8vh] md:h-[10vh] items-center p-4 bg-blue-300 sticky top-0">
      <div className="flex">
        <button>
          <img
            src={cartImage}
            alt="cart image"
            onClick={handleCartModal}
            className="lg:w-24 lg:h-24"
          ></img>
        </button>
        <p className="flex items-end lg:text-7xl">({productsCount})</p>
      </div>
      <p className="font-bold text-3xl lg:text-8xl">ReduxShop</p>

      {cartModal && <CartModal handleCartModal={handleCartModal} />}
    </div>
  );
}
