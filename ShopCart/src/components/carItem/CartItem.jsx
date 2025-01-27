import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  increaseProduct,
  decreaseProduct,
} from "../../redux/cart/actions";

export default function CartItem({
  product,
  handleProductClick,
  showBuyButton = false,
  showQuantityCartProduct = false,
  showRemoveButton = false,
}) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleIncreaseProductQuantity = () => {
    dispatch(increaseProduct(product.id));
  };

  const handleDecreaseProductQuantity = () => {
    dispatch(decreaseProduct(product.id));
  };

  return (
    <div
      className="flex flex-col items-center justify-start m-4 border-2 border-gray-300 lg:flex-row lg:w-[30vw] lg:h-[20vh]"
      key={product.id}
    >
      <div className="flex flex-col items-center lg:flex-row lg:items-start">
        <img
          src={product.image}
          alt="product-image"
          className="h-64 w-64 lg:w-[10vw] lg:h-[20vh]"
        />
        <div className="flex flex-col items-center mt-4 lg:ml-4 lg:space-y-4 lg:items-center lg:justify-center lg:w-[20vw] lg:h-[15vh]">
          <p className="text-xl font-bold text-center lg:text-left lg:text-6xl">
            {product.name}
          </p>
          <p className="text-center lg:text-left lg:text-4xl">
            {product.description}
          </p>
          <p className="text-center lg:text-left lg:text-4xl">
            ${product.price}
          </p>
          {showBuyButton && (
            <button
              className="rounded-md bg-green-600 text-white border-white border-2 w-16 mt-4 md:mt-24 lg:text-4xl lg:w-[8vw] lg:h-[4vh] hover:scale-110 transition-transform lg:mt-8"
              onClick={() => handleProductClick(product)}
            >
              BUY
            </button>
          )}
          {showQuantityCartProduct && (
            <div className="flex space-x-4 mt-4 items-center justify-center lg:justify-start  ">
              <button
                className="bg-blue-300 w-8 h-8 flex items-center justify-center rounded-sm border border-black hover:bg-blue-400 transition-colors lg:w-12 lg:h-12 lg:text-5xl"
                onClick={handleDecreaseProductQuantity}
              >
                -
              </button>
              <p className="text-2xl lg:text-7xl">{product.quantity}</p>
              <button
                className="bg-blue-300 w-8 h-8 flex items-center justify-center rounded-sm border border-black hover:bg-blue-400 transition-colors lg:w-12 lg:h-12 lg:text-5xl"
                onClick={handleIncreaseProductQuantity}
              >
                +
              </button>
            </div>
          )}
          <div>
            {showRemoveButton && (
              <div>
                <button
                  className="bg-red-600 w-16 rounded-md text-white mt-2 hover:bg-red-700 transition-colors lg:w-[3vw] lg:h-[2vh] lg:text-3xl hover:scale-110"
                  onClick={handleRemoveClick}
                >
                  CLEAN
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
