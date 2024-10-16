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
    if (e !== "X" && e !== "/" && e !== "+" && e !== "-" && operator === "") {
      setNum1((prevNum1) => prevNum1 + e);
      setValue((prevE) => prevE + e);
      console.log(num1);
    }
    if (e !== "X" && e !== "/" && e !== "+" && e !== "-" && operator !== "") {
      setNum2((prevNum2) => prevNum2 + e);
      setValue((prevE) => prevE + e);
      console.log(num2);
    }

    if ((e === "X" || e === "/" || e === "+" || e === "-") && operator === "") {
      setOperator(e);
      setValue((prevE) => prevE + e);
    }
  };

  const handleCalculate = () => {
    switch (operator) {
      case "+":
        setValue(Number(num1) + Number(num2));
        break;

      case "-":
        setValue(Number(num1) - Number(num2));

        break;
      case "/":
        setValue(Number(num1) / Number(num2));

        break;
      case "X":
        setValue(Number(num1) * Number(num2));

        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setValue("");
    setNum1(0);
    setNum2(0);
    setOperator("");
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
