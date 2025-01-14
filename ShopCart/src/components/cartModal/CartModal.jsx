import { useSelector } from "react-redux";

import CartItem from "../carItem/CartItem";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

export default function CartModal({ handleCartModal }) {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <div className=" items-center bg-white flex fixed inset-0 w-[90vw] h-[100vh]  flex-col border-gray-300 border-2">
      <div className="flex w-[90vw] h-[10vh] bg-blue-300 items-center justify-between">
        <p className="text-4xl ml-4 font-bold">YOUR CART</p>
        <button
          onClick={handleCartModal}
          className="mr-4 text-white bg-red-600 border-2 border-white flex justify-center items-center w-8"
        >
          X
        </button>
      </div>
      <div className="flex items-center w-[90vw] ml-8 justify-start h-[3vh] text-2xl font-bold">
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
