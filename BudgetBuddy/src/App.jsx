import Button from "./components/Button";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Input from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listTransaction, setListTransaction] = useState([]);

  function handleModalOpen() {
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleSave(transaction) {
    setListTransaction([...listTransaction, transaction]);
    setIsModalOpen(false);
  }
  return (
    <div>
      {isModalOpen && (
        <Input
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          handleSave={handleSave}
        />
      )}
      <Header />
      <Button onClick={handleModalOpen}>Transaction</Button>
      <Counter> $</Counter>
    </div>
  );
}
