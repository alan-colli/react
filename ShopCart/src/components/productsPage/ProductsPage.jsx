import { Products } from "../../ProductsList";
import CartItem from "../carItem/CartItem";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

export default function ProductsPage() {
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="w-[100vw] h-[100vh] lg:grid lg:grid-cols-3 items-center justify-center lg:pl-24">
      {Products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          handleProductClick={handleProductClick}
          showBuyButton
        />
      ))}
    </div>
  );
}
