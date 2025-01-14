export default function CartItem({
  product,
  handleProductClick,
  showBuyButton = false,
  showQuantityCartProduct = false,
  showRemoveButton = false,
}) {
  return (
    <div
      className="flex justify-start m-4 border-2 border-gray-300 flex-col items-center"
      key={product.id}
    >
      <div>
        {showRemoveButton && (
          <div>
            <button className="bg-red-600 w-16 rounded-md text-white mt-2">
              REMOVE
            </button>
          </div>
        )}
      </div>
      <div className="flex">
        <img src={product.image} alt="product-image" className="h-64 w-64" />
        <div className="flex items-center flex-col ml-4 mt-8">
          <p className="text-xl font-bold">{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
          {showBuyButton && (
            <button
              className="rounded-md bg-green-600 text-white border-white border-2 w-16 mt-24"
              onClick={() => handleProductClick(product)}
            >
              BUY
            </button>
          )}
          {showQuantityCartProduct && (
            <div className="flex space-x-4 mt-2 items-center justify-center ">
              <button className="bg-blue-300 w-4 h-4 items-center justify-center flex rounded-sm border-1 border-black">
                -
              </button>
              <p>{product.quantity}</p>
              <button className="bg-blue-300 w-4 h-4 items-center justify-center flex rounded-sm border-1 border-black">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
