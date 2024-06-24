import Button from "./components/Button";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Input from "./components/Modal";
import { useState } from "react";

const transactionInitialState = {
  numberInput: "",
  textInput: "",
  dateInput: "",
  isExpense: false,
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listTransaction, setListTransaction] = useState([]);

  const [amount, setAmount] = useState(0);
  const [transaction, setTransaction] = useState(transactionInitialState);
  function handleNumberInputChange(e) {
    setTransaction((prevNumberInput) => ({
      ...prevNumberInput,
      numberInput: parseFloat(e.target.value),
    }));
  }
  function handleTextInputChange(e) {
    setTransaction((prevTextInput) => ({
      ...prevTextInput,
      textInput: e.target.value,
    }));
  }
  function handleDateInputChange(e) {
    setTransaction((prevDateInput) => ({
      ...prevDateInput,
      dateInput: e.target.value,
    }));
  }

  function handleIsExpenseChange(e) {
    setTransaction((prevIsExpense) => ({
      ...prevIsExpense,
      isExpense: Boolean(e.target.value),
    }));
  }

  function handleModalOpen() {
    setTransaction(transactionInitialState);
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setTransaction(transactionInitialState);
    setIsModalOpen(false);
  }

  function handleSave() {
    const { numberInput, textInput, dateInput, isExpense } = transaction;
    const newTransaction = {
      number: numberInput,
      text: textInput,
      date: dateInput,
      isExpense,
    };
    setListTransaction([newTransaction, ...listTransaction]);
    setAmount((prevAmount) => {
      debugger;
      if (newTransaction.isExpense) {
        return prevAmount - newTransaction.number;
      }
      return prevAmount + newTransaction.number;
    });
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
          transaction={transaction}
          onIsExpenseChange={handleIsExpenseChange}
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
