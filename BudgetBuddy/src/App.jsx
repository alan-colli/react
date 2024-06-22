import Button from "./components/Button";
import Counter from "./components/Counter";

import Header from "./components/Header";
import Input from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listTransaction, setListTransaction] = useState([]);
  const [numberInput, setNumberInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [amount, setAmount] = useState(0);

  function handleNumberInputChange(e) {
    setNumberInput(e.target.value);
  }
  function handleTextInputChange(e) {
    setTextInput(e.target.value);
  }
  function handleDateInputChange(e) {
    setDateInput(e.target.value);
  }

  function addToList() {
    const newList = {
      number: numberInput,
      text: textInput,
      date: dateInput,
    };
    setListTransaction([...listTransaction, newList]);
    setNumberInput("");
    setNumberInput("");
    setDateInput("");
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setIsModalOpen(false);
    setNumberInput("");
    setDateInput("");
    setTextInput("");
  }

  function handleSave() {
    const newTransaction = {
      number: parseFloat(numberInput),
      text: textInput,
      date: dateInput,
    };
    setListTransaction([newTransaction, ...listTransaction]);
    setAmount((prevAmount) => prevAmount + newTransaction.number);
    handleModalClose();
  }

  return (
    <div>
      {isModalOpen && (
        <Input
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          handleSave={handleSave}
          onTextInputChange={handleTextInputChange}
          onNumberInputChange={handleNumberInputChange}
          onDateInputChange={handleDateInputChange}
          numberInput={numberInput}
          textInput={textInput}
          dateInput={dateInput}
        />
      )}
      <Header />
      <Button onClick={handleModalOpen}>Transaction</Button>
      <Counter listTransaction={listTransaction} amount={amount}>
        $
      </Counter>
    </div>
  );
}
