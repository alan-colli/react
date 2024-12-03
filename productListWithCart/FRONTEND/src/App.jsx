import Header from "./components/Header";
import Desserts from "./components/Desserts";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      <Header />
      <div className="flex">
        <Desserts />
        <Cart />
      </div>
    </div>
  );
}
export default App;
