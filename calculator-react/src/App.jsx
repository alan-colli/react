import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");

  const handleChangeScreen = (e) => {
    setValue((prevE) => prevE + e);
    if (e === "X" || e === "/" || e === "+" || e === "-") {
      setOperator(e);
      console.log(operator);
    }
  };

  const handleCalculate = (operator) => {
    switch (operator) {
      case "+":
        return <p>{(value = num1 + num2)}</p>;
      case "-":
        return <p>{(value = num1 - num2)}</p>;
      case "/":
        return <p>{(value = num1 / num2)}</p>;
      case "X":
        return <p>{(value = num1 * num2)}</p>;
    }
  };

  const handleReset = () => {
    setValue("");
    setNum1(0);
    setNum2(0);
  };

  const handleDeleteNumber = () => {
    setValue(value.slice(0, -1));
  };
  return (
    <div className="bg-black w-full h-[100vh] flex flex-col items-center">
      <Header />
      <Screen value={value} />
      <Keyboard
        handleChangeScreen={handleChangeScreen}
        handleReset={handleReset}
        handleDeleteNumber={handleDeleteNumber}
        handleCalculate={handleCalculate}
      />
    </div>
  );
}
