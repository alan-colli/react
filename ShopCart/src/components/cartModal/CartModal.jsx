import { useSelector } from "react-redux";

import CartItem from "../carItem/CartItem";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

export default function CartModal({ handleCartModal }) {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <div className=" items-center bg-white flex fixed inset-0 w-[90vw] h-[100vh]  flex-col border-gray-300 border-2 lg:w-[30vw]">
      <div className="flex w-[90vw] h-[10vh] bg-blue-300 items-center justify-between lg:w-[30vw]">
        <p className="text-4xl ml-4 font-bold lg:text-7xl">YOUR CART</p>
        <button
          onClick={handleCartModal}
          className="mr-4 text-white bg-red-600 border-2 border-white flex justify-center items-center w-8 lg:w-24 lg:h-24 lg:text-5xl"
        >
          X
        </button>
      </div>
      <div className="flex items-center w-[30vw] ml-8 justify-start h-[3vh] text-2xl font-bold lg:text-6xl">
        Total: ${productsTotalPrice}
      </div>
      <div className="flex flex-col items-center overflow-y-auto">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            showQuantityCartProduct
            showRemoveButton
          />
        ))}
      </div>
    </div>
  );
}
