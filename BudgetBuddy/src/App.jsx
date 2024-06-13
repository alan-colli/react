import Button from "./components/Button";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Imput from "./components/Imput";

export default function App() {
  return (
    <div>
      <Header />
      <Button>Transaction</Button>
      <Counter> $</Counter>
      <Imput />
    </div>
  );
}
