import Header from "./components/header/Header.jsx";
import ProductsPage from "./components/productsPage/ProductsPage.jsx";
import { Products } from "./ProductsList.js";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col  ">
      <Header />
      <ProductsPage />
    </div>
  );
}

export default App;
