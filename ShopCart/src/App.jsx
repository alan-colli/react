import Header from "./components/header/Header.jsx";
import HomePage from "./components/homePage/HomePage.jsx";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
