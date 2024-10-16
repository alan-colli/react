import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";

export default function App() {
  return (
    <div className="bg-blue-600 w-full h-[100vh] flex flex-col items-center">
      <Header />
      <Screen />
      <Keyboard />
    </div>
  );
}
