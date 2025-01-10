export default function CartItem({
  product,
  handleProductClick,
  showBuyButton = false,
}) {
  return (
    <div
      className="flex justify-start m-4 border-2 border-gray-300"
      key={product.id}
    >
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
      </div>
    </div>
  );
}
